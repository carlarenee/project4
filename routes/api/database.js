const database             = require('express').Router();
const { saveFeedback, getDaySixScores, getDailyScores, getDayFiveScores, getDayFourScores }  = require('../../models/watson');


database.get('/:username/7', getDailyScores, (req, res) => {
  res.json(res.scores || []);
});

database.get('/:username/6', getDaySixScores, (req, res) => {
  res.json(res.scores6 || []);
});

database.get('/:username/5', getDayFiveScores, (req, res) => {
  res.json(res.scores5 || []);
});

database.get('/:username/4', getDayFourScores, (req, res) => {
  res.json(res.scores4 || []);
});

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
});


module.exports = database;
