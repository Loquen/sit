import tokenService from './tokenService';
const KEY = 'AIzaSyBnfyv8NMyZ1SMkQ2N_xAvLjzsQGGUi2jc';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/'

// Search Youtubes api for query string, return results
async function searchYoutube(query){
  // console.log(process.env.YOUTUBE_API_KEY)
  return await fetch(`${BASE_URL}search?part=snippet&q=${query}&key=${KEY}`)
    .then(res => res.json());
}

// Get a single video's information based on videoId
async function getVideo(videoId){
  return await fetch(`${BASE_URL}videos?part=snippet&id=${videoId}&key=${KEY}`)
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