const router              = require('express').Router();
const { analyzeText }  = require('../../services/watson')


router.get('/', analyzeText, (req, res) => {
  res.json(res.data || []);
})

module.exports = router;
