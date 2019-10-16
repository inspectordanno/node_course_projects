const axios = require('axios');

const forecastPromise = async (longitude, latitude) => {
  const url = `https://api.darksky.net/forecast/a321cb916babae4e43ba4908b3652fb3/${longitude},${latitude}`;
  try {
    const response = await axios.get(url);
    // console.log(response.data);
    console.log(`${response.data.daily.summary} It is currently ${response.data.currently.temperature} degrees out. There is a ${response.data.currently.precipProbability}% chance of rain.`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = forecastPromise;