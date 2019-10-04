const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  videoList: [{
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }],
  daysList: [{
    type: Schema.Types.ObjectId,
    ref: 'Days'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);