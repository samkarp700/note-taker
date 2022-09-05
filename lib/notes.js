// as is file 


//filter functionality for .get() callback
function filterByQuery(query,notesArray) {
    let filteredResults = notesArray;
    if(query.title) {
        filteredResults = filteredResults.filter(notes => notes.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(notes => notes.text === query.text);
    }
    return filteredResults;
}

//new note function
//write notes to db.json
//return note on page


module.exports = {
    filterByQuery
}