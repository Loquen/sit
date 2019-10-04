const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  url: String,
  name: String,
  duration: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);