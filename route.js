const express = require('express');
const router = express.Router();
const path  = require('path');
const VIEWS = path.join(__dirname, 'views');

router.get("/", function(req, res) {
   res.sendFile(__dirname + '/home.html');
});

module.exports = router;