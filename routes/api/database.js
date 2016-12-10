const database             = require('express').Router();
const { getFeedback, saveFeedback, getCity }  = require('../../models/watson');

database.get('/:username', getFeedback, (req, res) => {
  res.json(res.images || []);
})

database.get('/:username/:city', getCity, (req, res) => {
  res.jsaon(res.city || []);
})

database.post('/', saveFeedback, (req, res) => {
  res.json({ message: 'you saved some feedback' });
})

module.exports = database;
