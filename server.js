const express = require('express');
const app = express();
//route created for front end request to json data file
const { notes } = require('./Develop/db/db.json');

//take in req.query as argument - filter through notes
function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if(query.title) {
        filteredResults = filteredResults.filter(notes => notes.title === notes.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(notes => notes.text === query.text);
    }
    //return filtered array
    return filteredResults;
}
//route to api
//http://localhost:3001/api/notes works
//route not pulling data in db file - note test data
app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});




app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});
