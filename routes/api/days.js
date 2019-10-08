const express = require('express');
const router = express.Router();
const daysCtrl = require('../../controllers/days');

/*---------- Public Routes ----------*/
router.post('/', daysCtrl.getToday);
router.post('/login', daysCtrl.create);
router.put('/login', daysCtrl.update);

/*---------- Protected Routes ----------*/




module.exports = router;