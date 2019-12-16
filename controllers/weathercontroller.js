const weatherservice = require('../services/weatherService');

function weathercontroller() {
    async function get(req, res) {
        let result = { country: 12, cite: null }

        result.country = await weatherservice().getWeatherCountry().then((data) => data);
        result.cite = await weatherservice().getWeatherbyCite().then((data) => data);
        return res.send(result).status(200)
    }
    return {get }
}

module.exports = weathercontroller;