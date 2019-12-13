const express = require('express');
const weatherrouter = express.Router();
const weathercontroller = require('../controllers/weathercontroller');



weatherrouter.route('/').get(weathercontroller().get)

module.exports = weatherrouter;