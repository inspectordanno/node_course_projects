const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
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
    name: 'Danno',
    message: 'You might need some help, but everything is going to be ok.'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    error: 'help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    error: '404 not found'
  })
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

