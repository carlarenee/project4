const db = require('./db.js');

function getAngerQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'anger';`)
  .then((anger) => {
    res.anger = anger;
    next();
  })
  .catch(error => next(error));
}

function getDisgustQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'disgust';`)
  .then((disgust) => {
    res.disgust = disgust;
    next();
  })
  .catch(error => next(error));
}

function getFearQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'fear';`)
  .then((fear) => {
    res.fear = fear;
    next();
  })
  .catch(error => next(error));
}

function getJoyQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'joy';`)
  .then((joy) => {
    res.joy = joy;
    next();
  })
  .catch(error => next(error));
}

function getSadnessQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'sadness';`)
  .then((sadness) => {
    res.sadness = sadness;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  getAngerQuote,
  getDisgustQuote,
  getFearQuote,
  getJoyQuote,
  getSadnessQuote,
};

