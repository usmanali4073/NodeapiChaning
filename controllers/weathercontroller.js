const weatherservice = require('../services/weatherService');

function weathercontroller() {
    async function get(req, res) {
        let result = { country: null, city: null };

        [result.country, result.city] = await Promise.all([
            weatherservice().getWeatherCountry().then((data) => data),
            weatherservice().getWeatherbyCite().then((data) => data)
        ]);

        return res.send(result).status(200)
    }
    return {get }
}

module.exports = weathercontroller;