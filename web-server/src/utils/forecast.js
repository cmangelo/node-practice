const request = require('request');

const forecast_url = 'https://api.darksky.net/forecast/793fa1f0dcfb135ebaf77c3dadf88991/';

const forecast = ({long, lat}, callback) => {
    const url = forecast_url + long + ',' + lat;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Darksky', undefined);
        } else if (body.error) {
            callback('Forecast not found for location', undefined);
        } else {
            callback(undefined, body);
        }
    });
}

module.exports = forecast;