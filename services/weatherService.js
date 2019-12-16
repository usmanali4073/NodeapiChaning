var request = require('request-promise');

function weatherservice() {

    async function getWeatherbyCite() {
        return await request({
            "method": "GET",
            "uri": "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
            "json": true
        }).catch((err) => {
            console.log(err)
        });
    };
    async function getWeatherCountry() {
        return await request({
            "method": "GET",
            "uri": "https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22",
            "json": true
        }).catch((err) => {
            console.log(err)
        });
    };

    return { getWeatherbyCite, getWeatherCountry }
}

module.exports = weatherservice;