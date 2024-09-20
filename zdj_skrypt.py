import requests
import os

# List of URLs with different skill icons
urls = [
    "https://skillicons.dev/icons?i=androidstudio&theme=light",
    "https://skillicons.dev/icons?i=angular&theme=light",
    "https://skillicons.dev/icons?i=bootstrap&theme=light",
    "https://skillicons.dev/icons?i=cs&theme=light",
    "https://skillicons.dev/icons?i=cpp&theme=light",
    "https://skillicons.dev/icons?i=css&theme=light",
    "https://skillicons.dev/icons?i=django&theme=light",
    "https://skillicons.dev/icons?i=express&theme=light",
    "https://skillicons.dev/icons?i=firebase&theme=light",
    "https://skillicons.dev/icons?i=html&theme=light",
    "https://skillicons.dev/icons?i=java&theme=light",
    "https://skillicons.dev/icons?i=js&theme=light",
    "https://skillicons.dev/icons?i=mongodb&theme=light",
    "https://skillicons.dev/icons?i=mysql&theme=light",
    "https://skillicons.dev/icons?i=nextjs&theme=light",
    "https://skillicons.dev/icons?i=nodejs&theme=light",
    "https://skillicons.dev/icons?i=php&theme=light",
    "https://skillicons.dev/icons?i=ps&theme=light",
    "https://skillicons.dev/icons?i=postgres&theme=light",
    "https://skillicons.dev/icons?i=postman&theme=light",
    "https://skillicons.dev/icons?i=py&theme=light",
    "https://skillicons.dev/icons?i=qt&theme=light",
    "https://skillicons.dev/icons?i=react&theme=light",
    "https://skillicons.dev/icons?i=sqlite&theme=light",
    "https://skillicons.dev/icons?i=tailwind&theme=light",
    "https://skillicons.dev/icons?i=ts&theme=light",
    "https://skillicons.dev/icons?i=unity&theme=light",
    "https://skillicons.dev/icons?i=wordpress&theme=light"
]

# Directory to save downloaded images
save_dir = "src/icons"

# Loop through the URLs and download each image
for url in urls:
    try:
        # Get the name from the URL by splitting the `i=` part
        skill_name = url.split("i=")[1].split("&")[0]
        
        # Send a GET request to the URL
        response = requests.get(url)
        
        # Check if the request was successful
        if response.status_code == 200:
            # Define the path to save the image
            file_path = os.path.join(save_dir, f"{skill_name}.svg")
            
            # Save the content as a file
            with open(file_path, "wb") as f:
                f.write(response.content)
            
            print(f"Downloaded {skill_name} icon successfully.")
        else:
            print(f"Failed to download {skill_name} icon.")
    
    except Exception as e:
        print(f"Error downloading {skill_name}: {e}")

print("Download complete.")
