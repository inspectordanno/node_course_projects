const request = require('request');

const url = 'https://api.darksky.net/forecast/a321cb916babae4e43ba4908b3652fb3/40.7128,-74.0060';

request({ url: url, json: true }, (error, response) => {
  const res = response.body.currently;
  console.log(`${response.body.daily.data[0].summary} It is currently ${res.temperature} degrees out. There is a ${res.precipProbability}% chance of rain.`)
});