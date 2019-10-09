const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/days');

/*---------- Public Routes ----------*/
router.post('/', daysCtrl.getToday);

/*---------- Protected Routes ----------*/




module.exports = router;