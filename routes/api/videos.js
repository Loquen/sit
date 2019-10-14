const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

router.get('/', videosCtrl.getVideos);
router.post('/video', videosCtrl.video);
router.post('/search', videosCtrl.search);

module.exports = router;