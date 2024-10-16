# Duke Chapel Livestreams Web App

This project consists of **two simple web applications** for Duke Chapel’s livestreams, split into:

1. **Upcoming Livestreams**: Displays any scheduled or upcoming livestream events from Duke Chapel's YouTube channel.
2. **Past Livestreams**: Displays previously completed livestreams from the same channel.

Each web app is lightweight, with no background styling or additional text in the HTML structure, focusing entirely on displaying YouTube embeds of the relevant streams.

---

## Table of Contents

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Setup](#setup)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Customization](#customization)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- **Minimal Design**: Each app contains only YouTube video embeds, with no excess text or background styles.
- **YouTube API Integration**: Fetches Duke Chapel's upcoming and past livestreams using the YouTube Data API.
- **Caching**: Uses localStorage to cache API results for 24 hours to reduce redundant API calls.
- **Separate Apps**: Independent HTML and JavaScript files for upcoming and past livestreams.

---

## Prerequisites

Before using the web apps, ensure you have:

1. **YouTube Data API Key**:  
   - Obtain a valid API key from the [Google Cloud Console](https://console.cloud.google.com/).
2. **YouTube Channel ID**:  
   - Duke Chapel's YouTube channel ID: `UC6PnY_FQmr-0bFN1aK22hBg`

---

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/duke-chapel-livestreams.git
   cd duke-chapel-livestreams
   ```

2. **Add your YouTube API key**:  
   Open both `upcoming.js` and `past.js`, and replace the placeholder API key with your own:

   ```javascript
   const API_KEY = 'YOUR_YOUTUBE_API_KEY';
   ```

3. **Serve the files locally** (optional):
   You can use any local server to test the HTML pages. For example, with Python:

   ```bash
   python3 -m http.server
   ```

   Then, open your browser and visit:
   ```
   http://localhost:8000/upcoming.html
   http://localhost:8000/past.html
   ```

4. **Deploy to the Web**:  
   - You can upload the HTML and JavaScript files to any web hosting platform, such as GitHub Pages or Netlify.

---

## Usage

- **Access Upcoming Livestreams**:
  Open the `upcoming.html` file in a web browser or use the deployed version online:
  ```
  yourdomain/upcoming.html
  ```

- **Access Past Livestreams**:
  Open the `past.html` file in a web browser or use the deployed version online:
  ```
  yourdomain/past.html
  ```

When the page loads, it will automatically fetch the latest streams from the YouTube API and display them. If there are no upcoming or past streams, the app will show a message:  
`No upcoming/past livestreams available.`

---

## Project Structure

```
/duke-chapel-livestreams
│
├── upcoming.html        # HTML for upcoming livestreams
├── upcoming.js          # JS logic for fetching upcoming livestreams
│
├── past.html            # HTML for past livestreams
├── past.js              # JS logic for fetching past livestreams
│
└── README.md            # This README file
```

---

## Customization

- **Adjusting the number of results**:
  Modify the `maxResults` parameter in the API URLs inside `upcoming.js` and `past.js` if you want to display more videos:

  ```javascript
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=upcoming&type=video&order=date&maxResults=3&channelId=${CHANNEL_ID}&key=${API_KEY}`;
  ```

- **Changing the Channel ID**:
  If needed, you can replace Duke Chapel’s YouTube channel ID with a different one by modifying this line in both JavaScript files:

  ```javascript
  const CHANNEL_ID = 'NEW_CHANNEL_ID';
  ```

---

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open a pull request or file an issue on the repository.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Acknowledgments

Special thanks to Duke Chapel for providing access to their livestreams and to the YouTube Data API for enabling seamless integration.

---

This README covers everything needed to set up, customize, and deploy the two web apps. Let me know if you need any further modifications!
