//api routers
const router = require('express').Router();
const filterByQuery = require('../../lib/notes');
const notes = require('../../Develop/db/db.json');

//api get notes
//route to api
//http://localhost:3001/api/notes works
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    // console.log(req.query)
    res.send('hi!');
    res.json(results);
});

//api get notes id

//post notes

module.exports = router;