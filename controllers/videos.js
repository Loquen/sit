const {google} = require('googleapis');
const fetch = require('node-fetch');

const Video = require('../models/video');
const Profile = require('../models/profile');

const KEY = '&key=AIzaSyBnfyv8NMyZ1SMkQ2N_xAvLjzsQGGUi2jc';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

module.exports = {
  video,
  getVideos,
  search
}

// Get back single video from youtube API
async function video(req, res) {
  // from video service we need to receive the video id to look up

}

// Get all videos in DB
async function getVideos(req, res) {
  let videos = await Video.find({})

  const promises = videos.map(video => fetch(`${BASE_URL}videos?part=snippet&id=${video.videoId}${KEY}`)
                            .then(res => res.json()));
  const videosList = await Promise.all(promises);

  // We've found all the videos, now we need to populate the youtube 

  res.json(videosList);  
}

// Search using the req.body params 
// url will be {base_url}search/{queryString} or something
async function search(req, res) {
  console.log('search api');
  const url = `${BASE_URL}/search?part=snippet&q=${req.body.query}&key=${process.env.YOUTUBE_API_KEY}`;
  console.log(url);
  let youtubeResponse = await fetch(url).then(res => {
    console.log(res);
    return res;
  });
  return res.json(youtubeResponse)
}