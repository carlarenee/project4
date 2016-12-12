const database             = require('express').Router();
const { saveFeedback, getDailyScores }  = require('../../models/watson');

database.get('/:username', getDailyScores, (req, res) => {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$', res.scores);
  res.json(res.scores || []);
});

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
});


module.exports = database;
