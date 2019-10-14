const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/days');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.post('/', checkAuth, daysCtrl.getToday);
router.post('/all', checkAuth, daysCtrl.getAllDays);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;