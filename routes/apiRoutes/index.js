// file for api notes
const router = require('express').Router();
const notes = require('../../db/db.json');
const uuid = require('../../helpers/uuid');
const fs = require('fs');
const path = require('path');


//functions needed

function showAllNotes(query, notesArray) {
    let filteredNotes = notesArray
    if (query.title) {
        filteredNotes = filteredNotes.filter(
            (note) => note.title === query.title
        )
    } return filteredNotes
}

//create note function
function createNote(body, notesArray) {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify({notes: notesArray}, null, 2),
    ); return note
};



//api routes
//route to api
//all routes already have /api/notes (all post will be /, /:id for delete ,etc)
router.get('/', (req, res) => {
    res.json(notes);
});


//save notes//add id
router.post('/', (req, res) => {
    req.body.id = notes.length.toString()
    const note = createNote(req.body, notes)
    res.json(note);
})
 

//delete notes




module.exports = router;