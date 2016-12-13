const db = require('./db.js');

function saveFeedback(req, res, next) {
  db.none(`INSERT INTO watson (anger_score, disgust_score, fear_score, joy_score, sadness_score, username) VALUES ($1, $2, $3, $4, $5, $6);`, [req.body.anger, req.body.disgust, req.body.fear, req.body.joy, req.body.sadness, req.body.username])
  .then(next())
  .catch(err => next(err));
}

function getDailyScores(req, res, next) {
db.any(`SELECT * FROM watson WHERE saved_on = current_date AND username = $1;`, [req.params.username])
.then((scores) => {
  res.scores = scores;
  next();
})
.catch(error => next(error));
}

function getDaySixScores(req, res, next) {
db.any(`SELECT * FROM watson WHERE saved_on = current_date - 1 AND username = $1;`, [req.params.username])
.then((scores6) => {
  res.scores6 = scores6;
  next();
})
.catch(error => next(error));
}

function getDayFiveScores(req, res, next) {
db.any(`SELECT * FROM watson WHERE saved_on = current_date - 2 AND username = $1;`, [req.params.username])
.then((scores5) => {
  res.scores5 = scores5;
  next();
})
.catch(error => next(error));
}

function getDayFourScores(req, res, next) {
db.any(`SELECT * FROM watson WHERE saved_on = current_date - 3 AND username = $1;`, [req.params.username])
.then((scores4) => {
  res.scores4 = scores4;
  next();
})
.catch(error => next(error));
}

module.exports = {
  saveFeedback,
  getDailyScores,
  getDaySixScores,
  getDayFiveScores,
  getDayFourScores,
};



