const Day = require('../models/day');
const Profile = require('../models/profile');
var moment = require('moment');


module.exports = {
  create,
  update,
  getToday,
}

async function getToday(req, res) {
  // is today in daysList?
  // Need to grab the find the current day from db
  // If it exists responds with that day
  // Day.find({"date": });
  let today = {
    year: moment().year(), 
    month: moment().month(),
    day: moment().date()
  };

  Profile.find({user:req.body.userId})
    .populate('daysList')
    .then(prof => {
      console.log(prof[0].daysList);
      // prof[0].daysList.forEach((day) => {

      // })
    })
  res.json(today);
}

async function create(req, res) {

}

async function update(req, res) {
  
}