const path = require('path');
const express = require('express');

console.log(__dirname);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Danno'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Danno'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'You might need some help, but everything is going to be ok.'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'rain',
    location: 'New York City'
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});

