const request = require('request');
const axios = require('axios');

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/a321cb916babae4e43ba4908b3652fb3/${longitude},${latitude}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
          callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
          callback('incorrect format', undefined)
        } else {
          callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
  });
}

module.exports = forecast;