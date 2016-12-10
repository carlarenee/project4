const db = require('./db.js');

function createUser(req, res, next) {
  console.log(req.body.username, req.body.password, req.body.city);
  db.none(`INSERT INTO users (username, password, city) VALUES ($1, $2, $3)`, [req.body.username, req.body.password, req.body.city])
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function findByUsername(username) {
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
}

module.exports = {
  createUser,
  findByUsername,
};
