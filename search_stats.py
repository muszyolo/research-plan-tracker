import webbrowser
import urllib.parse
import sys

def search_trusted_statistics(topic, choice):
    """
    Automates searches for a statistics topic based on user choice.
    """
    # 1. Prepare specialized queries
    yt_query = f"{topic} (StatQuest OR ZedStatistics OR Khan Academy OR Professor Leonard)"
    google_query = f'"{topic}" site:openintro.org OR site:psu.edu OR site:khanacademy.org'
    
    # 2. Define URLs
    urls = {
        "youtube": f"https://www.youtube.com/results?search_query={urllib.parse.quote(yt_query)}",
        "google": f"https://www.google.com/search?q={urllib.parse.quote(google_query)}",
        "gemini": "https://gemini.google.com/app",
        "chatgpt": "https://chatgpt.com/"
    }

    # 3. Execute based on choice
    if choice == "1": # All
        print(f"Opening everything for '{topic}'...")
        for url in urls.values():
            webbrowser.open(url)
    elif choice == "2": # YouTube
        print(f"Opening YouTube for '{topic}'...")
        webbrowser.open(urls["youtube"])
    elif choice == "3": # Google
        print(f"Opening Google for '{topic}'...")
        webbrowser.open(urls["google"])
    elif choice == "4": # AI Tools
        print(f"Opening Gemini and ChatGPT for '{topic}'...")
        webbrowser.open(urls["gemini"])
        webbrowser.open(urls["chatgpt"])
    else:
        print("Invalid choice. Opening Google by default.")
        webbrowser.open(urls["google"])

if __name__ == "__main__":
    # Handle potential Jupyter internal arguments
    args = [a for a in sys.argv[1:] if not a.startswith('-f=') and not a.startswith('--f=')]
    
    if args:
        topic_to_search = " ".join(args)
    else:
        topic_to_search = input("Enter the statistics topic: ")
        
    if topic_to_search.strip():
        print("\nWhere would you like to search?")
        print("1: ALL (YouTube, Google, Gemini, ChatGPT)")
        print("2: YouTube Only (Trusted Channels)")
        print("3: Google Only (Academic Sites)")
        print("4: AI Tools Only (Gemini & ChatGPT)")
        user_choice = input("Enter number (1-4): ")
        
        search_trusted_statistics(topic_to_search, user_choice)
    else:
        print("No topic provided.")
