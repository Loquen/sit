const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

/*---------- Public Routes ----------*/
router.get('/', videosCtrl.getVideos);
router.post('/video', videosCtrl.video);
router.post('/search', videosCtrl.search);
// router.post('/login', videosCtrl.login);


/*---------- Protected Routes ----------*/




module.exports = router;