// file for api notes
const router = require('express').Router();
const notes = require('../../db/db.json');
const uuid = require('../../helpers/uuid');
const fs = require('fs');
const path = require('path');
const { showAllNotes, createNote, findbyId, deleteIt } = require('../../lib/index');



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
});
 

//delete notes
router.delete('/:id', (req, res) => {
    res.json(deleteIt(req.params.id, notes));
});



module.exports = router;