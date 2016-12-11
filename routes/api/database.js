const database             = require('express').Router();
const { getFeedback, saveFeedback }  = require('../../models/watson');

database.get('/:username', getFeedback, (req, res) => {
  res.json(res.images || []);
});

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
});

module.exports = database;
