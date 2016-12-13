const feedback = require('express').Router();
const { getAngerQuote, getDisgustQuote, getFearQuote, getJoyQuote, getSadnessQuote } = require('../../models/feedback');

feedback.get('/quotes/anger', getAngerQuote, (req, res) => {
  res.json(res.anger || []);
});

feedback.get('/quotes/disgust', getDisgustQuote, (req, res) => {
  res.json(res.disgust || []);
});

feedback.get('/quotes/fear', getFearQuote, (req, res) => {
  res.json(res.fear || []);
});

feedback.get('/quotes/joy', getJoyQuote, (req, res) => {
  res.json(res.joy || []);
});

feedback.get('/quotes/sadness', getSadnessQuote, (req, res) => {
  res.json(res.sadness || []);
});

module.exports = feedback;

