const db = require('./db.js');

function createUser(req, res, next) {
  db.none(`INSERT INTO users (username, password) VALUES ($1, $2)`, [req.body.username, req.body.password])
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
  findByUsername
};