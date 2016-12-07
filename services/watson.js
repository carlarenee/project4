const watson = require('watson-developer-cloud');

const username = process.env.WATSON_USER;
const password = process.env.WATSON_PASSWORD;


const analyzer = watson.tone_analyzer({
  username: `${username}`,
  password: `${password}`,
  version: 'v3',
  version_date: '2016-05-19'
});


const analyzeText = (req, res, next) => {
  analyzer.tone({
    // req.body.main,
    text: 'hi there i really really love taquitos'
  }, (err, tone) => {
      if (err) {
        console.log(err);
        next(err);
      } else {
        res.data = tone;
        next();
      }
      console.log(tone.document_tone.tone_categories[0]);
  });
}

module.exports = { analyzeText }