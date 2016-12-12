const database             = require('express').Router();
const { saveFeedback, getDaySixScores, getDailyScores }  = require('../../models/watson');


database.get('/:username', getDaySixScores, (req, res) => {
  // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$', res.scores2);
  res.json(res.scores2 || []);
});

database.get('/:username', getDailyScores, (req, res) => {
  console.log('hihhihihihihihihhii', res.scores);
  res.json(res.scores || []);
});

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
});


module.exports = database;
