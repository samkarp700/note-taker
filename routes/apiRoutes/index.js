// file for api notes
const router = require('express').Router();
const {filterByQuery} = require('../../lib/notes');
const notes = require('../../db/db.json');

//api get notes
//route to api
//http://localhost:3001/api/notes works
//all routes already have /api/notes (all post will be /, /:id for delete ,etc)
router.get('/', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    // console.log(req.query)
    res.json(results);
});

//api get notes id

//post notes

module.exports = router;