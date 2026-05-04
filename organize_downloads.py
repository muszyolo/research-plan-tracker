import os
import shutil
import time
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Define the categories and their associated file extensions
FILE_CATEGORIES = {
    "Images": ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.heic'],
    "Documents": ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt', '.xls', '.xlsx', '.csv', '.ppt', '.pptx'],
    "Audio": ['.mp3', '.wav', '.aac', '.flac', '.ogg', '.m4a'],
    "Video": ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.webm'],
    "Archives": ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2'],
    "Executables": ['.exe', '.msi', '.bat', '.cmd', '.ps1'],
    "Code": ['.py', '.js', '.html', '.css', '.java', '.cpp', '.c', '.json', '.xml', '.yml', '.yaml'],
}

# Ignore shortcuts and system files
IGNORE_EXTENSIONS = ['.crdownload', '.part', '.tmp', '.download', '.lnk', '.url', '.ini']

# Add any specific files or folders you want to keep exactly where they are
IGNORE_NAMES = ['Master by Research', 'prograde-coronal', 'organize_downloads.py']

def get_all_valid_paths(folder_name):
    """Returns a list of all existing paths (Local + OneDrive)."""
    home = Path.home()
    paths = []
    
    # Check standard path
    standard_path = home / folder_name
    if standard_path.exists():
        paths.append(standard_path)
        
    # Check OneDrive path
    onedrive_path = home / "OneDrive" / folder_name
    if onedrive_path.exists():
        paths.append(onedrive_path)
        
    return list(set(paths))

def get_primary_downloads():
    """Returns the most likely primary Downloads folder."""
    home = Path.home()
    onedrive_downloads = home / "OneDrive" / "Downloads"
    if onedrive_downloads.exists():
        return onedrive_downloads
    return home / "Downloads"

def move_item(item_path):
    """Moves a file or folder into its category folder."""
    if not item_path.exists():
        return False
        
    # Check if the name is in our ignore list
    if item_path.name in IGNORE_NAMES:
        return False

    # Categorize
    if item_path.is_dir():
        # Don't move our own category folders
        if item_path.name in list(FILE_CATEGORIES.keys()) + ["Other", "Folders"]:
            return False
        target_category = "Folders"
    else:
        extension = item_path.suffix.lower()
        if extension in IGNORE_EXTENSIONS or item_path.name.lower() == 'desktop.ini':
            return False

        target_category = "Other"
        for category, extensions in FILE_CATEGORIES.items():
            if extension in extensions:
                target_category = category
                break
            
    dest_base = get_primary_downloads()
    target_folder = dest_base / target_category
    
    if not target_folder.exists():
        target_folder.mkdir(parents=True, exist_ok=True)
        
    target_path = target_folder / item_path.name
    
    if item_path == target_path:
        return False
    
    # Handle collisions
    if target_path.exists():
        base_name = item_path.stem if item_path.is_file() else item_path.name
        ext = item_path.suffix if item_path.is_file() else ""
        counter = 1
        while True:
            new_name = f"{base_name}_{counter}{ext}"
            target_path = target_folder / new_name
            if not target_path.exists():
                break
            counter += 1
            
    try:
        shutil.move(str(item_path), str(target_path))
        print(f"Success! Moved {item_path.name} to {target_category}")
        return True
    except PermissionError:
        # We'll just silently skip busy files now to avoid terminal clutter
        return False
    except Exception as e:
        print(f"ERROR: Could not move {item_path.name}: {e}")
        return False

def organize_folder(folder_path):
    if not folder_path.exists():
        return
    print(f"Scanning: {folder_path}")
    moved_count = 0
    try:
        for item in folder_path.iterdir():
            if move_item(item):
                moved_count += 1
    except Exception:
        pass
    if moved_count > 0:
        print(f"Done! Organized {moved_count} items from {folder_path.name}.\n")

def cleanup_old_executables():
    exec_folder = get_primary_downloads() / "Executables"
    if not exec_folder.exists():
        return
    current_time = time.time()
    for file_path in exec_folder.iterdir():
        if file_path.is_file() and (current_time - file_path.stat().st_mtime) > 86400:
            try:
                file_path.unlink()
                print(f"Auto-deleted old installer: {file_path.name}")
            except Exception:
                pass

class MultiFolderHandler(FileSystemEventHandler):
    def on_created(self, event):
        time.sleep(1) # Give OS a second
        move_item(Path(event.src_path))
    def on_modified(self, event):
        move_item(Path(event.src_path))
    def on_moved(self, event):
        move_item(Path(event.dest_path))

if __name__ == "__main__":
    all_paths = list(set(get_all_valid_paths("Downloads") + get_all_valid_paths("Desktop")))
    
    print("--- Multi-Folder Research Organizer ---")
    print("Monitoring Folders:")
    for p in all_paths: print(f" -> {p}")
    print(f"Ignoring: {', '.join(IGNORE_NAMES)}")
    print("---------------------------------------\n")
    
    # 1. Initial cleanup
    for p in all_paths: organize_folder(p)
    cleanup_old_executables()
    
    # 2. Watch for changes
    observer = Observer()
    for p in all_paths:
        observer.schedule(MultiFolderHandler(), str(p), recursive=False)
    
    print("Watching for new files and folders...")
    print("Press Ctrl+C to stop.\n")
    
    observer.start()
    try:
        while True:
            for _ in range(3600): time.sleep(1)
            cleanup_old_executables()
    except KeyboardInterrupt:
        observer.stop()
        print("\nStopping...")
    observer.join()





