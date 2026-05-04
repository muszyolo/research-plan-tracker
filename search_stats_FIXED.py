import webbrowser
import urllib.parse
import sys

def search_trusted_statistics(topic, choice):
    yt_query = "{} (StatQuest OR ZedStatistics OR Khan Academy OR Professor Leonard)".format(topic)
    google_query = '\"{}\" site:openintro.org OR site:psu.edu OR site:khanacademy.org'.format(topic)
    
    yt_url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(yt_query)
    google_url = "https://www.google.com/search?q=" + urllib.parse.quote(google_query)
    
    urls = {
        "youtube": yt_url,
        "google": google_url,
        "gemini": "https://gemini.google.com/app",
        "chatgpt": "https://chatgpt.com/"
    }

    if choice == "1":
        print("Opening everything for {}...".format(topic))
        for url in urls.values(): webbrowser.open(url)
    elif choice == "2":
        print("Opening YouTube...")
        webbrowser.open(urls["youtube"])
    elif choice == "3":
        print("Opening Google...")
        webbrowser.open(urls["google"])
    elif choice == "4":
        print("Opening AI Agents...")
        webbrowser.open(urls["gemini"])
        webbrowser.open(urls["chatgpt"])
    else:
        print("Defaulting to Google...")
        webbrowser.open(urls["google"])

if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith('-f=') and not a.startswith('--f=')]
    if args:
        topic = " ".join(args)
    else:
        topic = input("Enter stats topic: ")
        
    if topic.strip():
        print("\n1:All, 2:YouTube, 3:Google, 4:AI")
        c = input("Enter choice (1-4): ")
        search_trusted_statistics(topic, c)
    else:
        print("No topic provided.")
