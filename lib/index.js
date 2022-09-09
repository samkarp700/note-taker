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
        path.join(__dirname, '../db/db.json'), 
        JSON.stringify(notesArray, null, 2),
    ); return note
};

function findByID(id, notesArray) {
    const result = notesArray.filter((notes) => notes.id === id)
    return result
};

//delete function
function deleteIt(id, notesArray) {
    //function to find array element
    const currentNote = notesArray.findIndex(note => {
        return note.id === id;
    });
    //remove notes in array
    notesArray.splice(currentNote, 1);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), 
    JSON.stringify(notesArray, null, 2));
    //display new array
    return currentNote;
}

module.exports = {
    showAllNotes, 
    createNote,
    findByID,
    deleteIt
}