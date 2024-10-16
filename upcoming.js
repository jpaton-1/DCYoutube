const API_KEY = 'AIzaSyBuoIV7cSxilFJd2DBJ-fNF-mO_HEJfjhM';  // Replace with your YouTube API key
const CHANNEL_ID = 'UC6PnY_FQmr-0bFN1aK22hBg';  // Duke Chapel's channel ID
const upcomingContainer = document.getElementById('upcoming-livestreams');

// Utility: Check if 24 hours have passed
function isCacheValid(timestamp) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Date.now() - timestamp < oneDay;
}

// Fetch data with caching logic
async function fetchDataWithCache(apiUrl, cacheKey) {
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);

  if (cachedData && cachedTimestamp && isCacheValid(parseInt(cachedTimestamp))) {
    return JSON.parse(cachedData);
  } else {
    const response = await fetch(apiUrl);
    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(`${cacheKey}_timestamp`, Date.now());
    return data;
  }
}

// Fetch Upcoming Livestreams
async function fetchUpcomingLivestreams() {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=upcoming&type=video&order=date&maxResults=1&channelId=${CHANNEL_ID}&key=${API_KEY}`;
  const data = await fetchDataWithCache(apiUrl, 'upcomingLivestreams');
  displayLivestreams(data, upcomingContainer);
}

// Display Livestreams in the DOM
function displayLivestreams(data, container) {
  if (!data.items || data.items.length === 0) {
    container.innerHTML = '<p>No upcoming livestreams available.</p>';
    return;
  }

  data.items.forEach(item => {
    const videoId = item.id.videoId;
    const videoElement = document.createElement('div');
    videoElement.classList.add('video-container');
    videoElement.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        allowfullscreen>
      </iframe>
    `;
    container.appendChild(videoElement);
  });
}

// Load data when the page loads
window.onload = fetchUpcomingLivestreams;
