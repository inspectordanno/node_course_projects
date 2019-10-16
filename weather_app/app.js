const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const forecastPromise = require('./utils/forecastPromise');

// const url = 'https://api.darksky.net/forecast/a321cb916babae4e43ba4908b3652fb3/40.7128,-74.0060';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('incorrect format')
//   } else {
//     const res = response.body.currently;
//     console.log(`${response.body.daily.data[0].summary} It is currently ${res.temperature} degrees out. There is a ${res.precipProbability}% chance of rain.`)
//   }
// });

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

// forecastPromise(-75.7088, 44.1545).then(result => {
//   console.log(result);
// })