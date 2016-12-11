const db = require('./db.js');

function getFeedback(req, res, next) {
  console.log('the username is', req.params.username)
  db.any('SELECT * FROM watson WHERE username = $1;', [req.params.username])
 .then((images) => {
   res.images = images;
   next();
 })
 .catch(error => next(error));
}

function saveFeedback(req, res, next) {
  console.log('check check check', req.body.anger);
  db.none(`INSERT INTO watson (anger_score, disgust_score, fear_score, joy_score, sadness_score, username) VALUES ($1, $2, $3, $4, $5, $6);`, [req.body.anger, req.body.disgust, req.body.fear, req.body.joy, req.body.sadness, req.body.username])
  .then(next())
  .catch(err => next(err));
}

// function getAverageDailyAnger(req,res, next) {
//   db.many(`SELECT `)
// }


module.exports = { getFeedback, saveFeedback };
