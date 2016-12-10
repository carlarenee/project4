const router = require('express').Router();
const { search } = require('../../services/weather');

router.get('/', search, (req, res) => {
  res.json(res.forecast);
});

module.exports = router;
