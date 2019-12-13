const express = require('express')
const app = express()
const port = 3000

//Routes
const routesconfig = require('./config/routesconfig')(app);





app.listen(port, () => console.log(`Example app listening on port port!`))