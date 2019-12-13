const weatherrouter = require('../routes/weatherroutes');
const roadrouter = require('../routes/roadrouter');

function config(app) {
    app.use('/api/weather', weatherrouter)
    app.use('/api/road', roadrouter)
}
module.exports = config;