const request = require('request');

const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const geocode_url_2 = '.json?access_token=pk.eyJ1IjoiY2hyaXN0aWFueGN2IiwiYSI6ImNqdjFob3YxMDF1aWU0ZHF4ZDh3OGF3czAifQ.SXnUSJbCulmhUs5VgF7KUg';

const geocode = (address, callback) => {
    const url = geocode_url + encodeURIComponent(address) + geocode_url_2;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Mapbox could not be reached', undefined);
        } else if (body.features.length === 0) {
            callback('Location not found', undefined);
        }else {
            const data = body.features[0];
            const long = data.center[0];
            const lat = data.center[1];
            const location = data.place_name;
            callback(undefined, {long, lat, location});
        }
    });
}

module.exports = geocode;