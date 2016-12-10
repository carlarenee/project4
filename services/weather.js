const fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

function search(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.city},us&units=imperial&cnt=16&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.forecast = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { search };
