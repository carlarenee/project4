const db = require('./db.js');

function getAngerQuote(req, res, next) {
  db.one(`SELECT * FROM quotes WHERE emotion = 'anger' ORDER BY RANDOM() LIMIT 1;`)
  .then((anger) => {
    res.quote = anger;
    next();
  })
  .catch(error => next(error));
}

function getDisgustQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'disgust';`)
  .then((disgust) => {
    res.quote = disgust;
    next();
  })
  .catch(error => next(error));
}

function getFearQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'fear';`)
  .then((fear) => {
    res.quote = fear;
    next();
  })
  .catch(error => next(error));
}

function getJoyQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'joy';`)
  .then((joy) => {
    res.quote = joy;
    next();
  })
  .catch(error => next(error));
}

function getSadnessQuote(req, res, next) {
  db.many(`SELECT * FROM quotes WHERE emotion = 'sadness';`)
  .then((sadness) => {
    res.quote = sadness;
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

