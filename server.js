const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


app.use('/api/notes', apiRoutes);
app.use('/', htmlRoutes);




app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

