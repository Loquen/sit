const fetch = require('node-fetch');
const Video = require('../models/video');
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

module.exports = {
  video,
  getVideos,
  search
}

// Get back single video json from youtube API
async function video(req, res) {
  const url = `${BASE_URL}videos?part=snippet&id=${req.body.videoId}&key=${process.env.YOUTUBE_KEY}`;
  return res.json(await fetch(url).then(res => res.json()));
}

// Get all videos in DB and populate them as full objects
async function getVideos(req, res) {
  let videos = await Video.find({})
  const promises = videos.map(video => fetch(`${BASE_URL}videos?part=snippet&id=${video.videoId}&key=${process.env.YOUTUBE_KEY}`)
                            .then(res => res.json()));
  const videosList = await Promise.all(promises);

  res.json(videosList);  
}

// Search using the req.body params dotenv
async function search(req, res) {
  const url = `${BASE_URL}search?part=snippet&q=${req.body.query}&key=${process.env.YOUTUBE_KEY}`;
  return res.json(await fetch(url).then(res => res.json()));
}