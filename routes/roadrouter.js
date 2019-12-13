const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send(" road router is working"));


module.exports = router;