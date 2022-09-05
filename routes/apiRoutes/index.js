//middleware file for api notes
const router = require('express').Router();
//tell express how to handle data in noteRoute.js
const noteRoute = require('./noteRoute');

router.use(noteRoute);

module.exports = router;