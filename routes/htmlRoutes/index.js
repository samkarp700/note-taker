//router for html content
const router = require('express').Router();
const path = require('path');

router.get('/notes', (req, res) => {
    let filePath = path.join(__dirname, '../../public/notes.html');
    res.sendFile(filePath);
})
router.get('/', (req,res) => {
    let noteHome = path.join(__dirname,'../../public/index.html');
    res.sendFile(noteHome);
})

module.exports = router;