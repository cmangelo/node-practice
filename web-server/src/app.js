const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>')
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Christian',
        age: 23
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast:'Sunny with a high of 75',
        location: 'Irvine, CA'
    });
})


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});