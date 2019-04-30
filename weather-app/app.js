const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const address = process.argv[2];

if (!address) {
    return console.log('No address provided');
}

geocode(address, (error, {long, lat}) => {
    if (error) {
        return console.log('Error', error);
    }
    
    forecast({long, lat}, (error, forecast) => {
        if (error) {
            return console.log(error);
        } 
        
        console.log(forecast)
    })
    
});