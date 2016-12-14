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
  db.one(`SELECT * FROM quotes WHERE emotion = 'disgust' ORDER BY RANDOM() LIMIT 1;`)
  .then((disgust) => {
    res.quote = disgust;
    next();
  })
  .catch(error => next(error));
}

function getFearQuote(req, res, next) {
  db.one(`SELECT * FROM quotes WHERE emotion = 'fear' ORDER BY RANDOM() LIMIT 1;`)
  .then((fear) => {
    res.quote = fear;
    next();
  })
  .catch(error => next(error));
}

function getJoyQuote(req, res, next) {
  db.one(`SELECT * FROM quotes WHERE emotion = 'joy' ORDER BY RANDOM() LIMIT 1;`)
  .then((joy) => {
    res.quote = joy;
    next();
  })
  .catch(error => next(error));
}

function getSadnessQuote(req, res, next) {
  db.one(`SELECT * FROM quotes WHERE emotion = 'sadness' ORDER BY RANDOM() LIMIT 1;`)
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

