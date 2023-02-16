const express = require("express");
const router = express.Router();
const dbimport = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

//gets the notes from dbimport
router.get("/notes", (req, res) => {
    console.log("notes recieved")
    res.json(dbimport);
});
//post notes and writes to database
router.post("/notes", (req, res) => {

    const {title, text} = req.body

    const pushNote  = {
        id: uuidv4(),
        title,
        text
    };

    dbimport.push(pushNote);
    fs.writeFile("./db/db.json", JSON.stringify(dbimport), (err) => {
        if (err) {
            console.log(err)
        }
    });

    res.send(dbimport);
});    


module.exports = router;