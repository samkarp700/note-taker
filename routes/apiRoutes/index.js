// file for api notes
const router = require('express').Router();
const {filterByQuery} = require('../../lib/notes');
const notes = require('../../db/db.json');
const uuid = require('../../helpers/uuid');

//api get notes
//route to api
//http://localhost:3001/api/notes works
//all routes already have /api/notes (all post will be /, /:id for delete ,etc)
router.get('/', (req, res) => {
    res.json(notes);
});


//save notes//add id
router.post('/', (req, res) => {
    // res.json(`${req.method} saved to notes.`);
    const { title, text } = req.body;
    if (title && text) {
        const newNote ={
            title, 
            text, 
            note_id: uuid(),
        };
    const response = {
        status: 'success', 
        body: newNote,
    };
    // console.log(response);

    res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

//delete notes




module.exports = router;