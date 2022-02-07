const router = require('express').Router();
const {Newnote, NoteEdit,Noteremov,searchId}  = require('../notes/Notecreate.js');
const { v4: uuidv4 } = require('uuid');
const { notes } = require('../Develop/db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
  });
router.post('/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = uuidv4();
        Newnote (req.body, notes);
    } else {
        NoteEdit (req.body, notes); 
    }
    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = searchId(req.params.id, notes);

    Noteremov(note, notes);
    res.json();
  });
  
    module.exports = router;
