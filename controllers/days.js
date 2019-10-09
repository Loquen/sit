const Day = require('../models/day');
const Profile = require('../models/profile');
var moment = require('moment');


module.exports = {
  getToday
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
      // console.log(prof);
      let latestDay =  prof.daysList[prof.daysList.length - 1];
      // console.log(latestDay.date);
      if(latestDay.date.day === today.day && latestDay.date.month === today.month && latestDay.date.year === today.year){
        console.log('update: ', latestDay.id)
        // latestDay is today, find that day and update with elapsedTime
        let session = {
          duration: req.body.elapsedTime,
          video: req.body.videoId || null
        }
        // Day.findByIdAndUpdate(latestDay.id, { 
        //   $inc: {totalTime: req.body.elapsedTime}, 
        //   $push: {sessions: session} 
        // })
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
          console.log('create: ', day._id);
          prof.daysList.push(day._id)
          prof.save()
          // Profile.findByIdAndUpdate(prof[0].id, {$push: { daysList: day._id }}, (err, profile) => {
          //   console.log(profile);
          // })
        //   Profile.update(
        //     { _id: prof[0].id }, 
        //     { $push: { daysList: day._id } },
            
        // );
        })
      }
    })
  res.json(today);
}
