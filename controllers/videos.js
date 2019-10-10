const {google} = require('googleapis');
const fetch = require('node-fetch');

const Video = require('../models/video');
const Profile = require('../models/profile');

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

module.exports = {
  video,
  videosList,
  search
}

// Get back single video from youtube API
async function video(req, res) {
  // from video service we need to receive the video id to look up

}

// Get back video list for logged in user
async function videosList(req, res) {

}

// Search using the req.body params 
// url will be {base_url}search/{queryString} or something
async function search(req, res) {
  console.log('search api');
  const url = `${BASE_URL}/search?part=snippet&q=${req.body.query}&key=${process.env.YOUTUBE_API_KEY}`;
  console.log(url);
  let youtubeResponse = await fetch(url).then(res => {
    // console.log(res);
    console.log(res);
    return res;
  });
  // console.log(res.json(youtubeResponse.result));
  
  return res.json(youtubeResponse)

  // console.log(req.body.query)
  // res.json(req.body.query)
}