const database             = require('express').Router();
const { saveFeedback, getDaySixScores, getDailyScores }  = require('../../models/watson');


database.get('/:username', getDailyScores, (req, res) => {
  res.json(res.scores || []);
});

database.get('/:username', getDaySixScores, (req, res) => {
  console.log('hihhihihihihihihhii', res.scores2);
  res.json(res.scores2 || []);
});

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
});


module.exports = database;
