const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/days');

/*---------- Public Routes ----------*/
router.post('/', daysCtrl.getToday);
router.post('/all', daysCtrl.getAllDays);

/*---------- Protected Routes ----------*/




module.exports = router;