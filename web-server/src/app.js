const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Handlebars config
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static views for directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Handlebars',
        name: 'Christian'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'An address is required' 
        });
    }
    geocode(req.query.address, (error, {long, lat, location} = {}) => {
        if (error) {
            return res.send({error});
        }
        
        forecast({long, lat}, (error, forecast) => {
            if (error) {
                return res.send({error});
            } 
            
            res.send({
                forecast,
                location,
                address: req.query.address
            });
        });
        
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Christian'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is the help page',
        name: 'Christian'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error',
        error: 'Help article not found',
        name: 'Christian'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        error: 'Page not found',
        name: 'Christian'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});