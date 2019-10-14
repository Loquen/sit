const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/videos');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.get('/', checkAuth, videosCtrl.getVideos);
router.post('/video', checkAuth,  videosCtrl.video);
router.post('/search', checkAuth,  videosCtrl.search);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;