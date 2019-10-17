const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const forecastPromise = require('./utils/forecastPromise');

const address = process.argv[2];

if (!address || typeof address !== 'string') {
  return 'please input a string';
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
  
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
  
      console.log(data.location);
      console.log(forecastData);
    });
  });
}

// forecastPromise(-75.7088, 44.1545).then(result => {
//   console.log(result);
// })