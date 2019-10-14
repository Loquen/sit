const Day = require('../models/day');
const Profile = require('../models/profile');
var moment = require('moment');

module.exports = {
  getToday,
  getAllDays
}

async function getToday(req, res) {
  let today = {
    year: moment().year(), 
    month: moment().month(),
    day: moment().date()
  };

  Profile.findOne({user:req.body.userId})
    .populate('daysList')
    .then(prof => {
      let latestDay =  prof.daysList[prof.daysList.length - 1];
      if(latestDay && latestDay.date.day === today.day && latestDay.date.month === today.month && latestDay.date.year === today.year){
        // latestDay is today, find that day and update with elapsedTime
        let session = {
          duration: req.body.elapsedTime,
          video: req.body.videoId || null
        }
        Day.findById(latestDay.id)
          .then(day => {
            day.totalTime += req.body.elapsedTime;
            day.sessions.push(session);
            day.save();
          })
      } else {
        let day = new Day({
          date: today,
          totalTime: req.body.elapsedTime,
          sessions: [{
            duration: req.body.elapsedTime,
            video: req.body.videoId || null
          }]
        })
        day.save((err, day) => {
          prof.daysList.push(day._id)
          prof.save()
        })
      }
    })
  res.json(today);
}

async function getAllDays(req, res){
  Profile.findOne({user:req.body.userId})
    .populate('daysList')
    .then(profile => res.json(profile.daysList));
}
