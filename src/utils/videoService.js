import tokenService from './tokenService';
// const KEY = process.env.REACT_APP_YOUTUBE_KEY;
// const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

// Search Youtubes api for query string, return results
async function searchYoutube(query){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: {query: query}
  };
  return await fetch(`/api/videos/search`, options)
    .then(res => res.json());
}

// Get a single video's information based on videoId
async function getVideo(videoId){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(videoId)
  };
  return await fetch(`/api/videos/video`, options)
    .then(res => res.json());
}

// Get array of videos back from DB
function getVideosList(){
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(`/api/videos/`, options)
    .then(res => res.json());
}

export default {
  searchYoutube,
  getVideosList,
  getVideo
};