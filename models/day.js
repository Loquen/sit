const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const daySchema = new mongoose.Schema({
  date: {
    year: Number,
    month: Number,
    day: Number
  },
  totalTime: Number,
  sessions: [{
    time: String,
    duration: Number,
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Day', daySchema);