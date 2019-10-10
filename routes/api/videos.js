const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

/*---------- Public Routes ----------*/
router.post('/', videosCtrl.video);
router.post('/videos', videosCtrl.videosList);
router.post('/search', videosCtrl.search);
// router.post('/login', videosCtrl.login);


/*---------- Protected Routes ----------*/




module.exports = router;