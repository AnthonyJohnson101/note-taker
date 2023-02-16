const express = require("express")
const app = express();
const PORT = process.env.PORT || 3001;

const notes = require("./routes/notes.js")
const api = require("./routes/apinotes.js")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", (req, res ) => {
    res.render("index.html")
})

app.use("/notes", notes)
app.use("/api", api )




