const feedback = require('express').Router();
const { getAngerQuote, getDisgustQuote, getFearQuote, getJoyQuote, getSadnessQuote } = require('../../models/feedback');

feedback.get('/quotes/anger', getAngerQuote, (req, res) => {
  res.json(res.quote || []);
});

feedback.get('/quotes/disgust', getDisgustQuote, (req, res) => {
  res.json(res.quote || []);
});

feedback.get('/quotes/fear', getFearQuote, (req, res) => {
  res.json(res.quote || []);
});

feedback.get('/quotes/joy', getJoyQuote, (req, res) => {
  res.json(res.quote || []);
});

feedback.get('/quotes/sadness', getSadnessQuote, (req, res) => {
  res.json(res.quote || []);
});

module.exports = feedback;

