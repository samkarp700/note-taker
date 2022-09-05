//heroku: https://floating-river-07736.herokuapp.com/
const express = require('express');

// //route created for front end request to json data file
// const notes = require('./Develop/db/db.json');- moved to noteroute for api
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');


//route to api
//http://localhost:3001/api/notes works
//moved to api route noteRoute.js
// app.get('/api/notes', (req, res) => {
//     let results = notes;
//     console.log(req.query)
//     res.json(results);
// });

app.use('/api/notes', apiRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
