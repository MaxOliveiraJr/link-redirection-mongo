const express = require("express");

const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost/links", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});



let db = mongoose.connection;

db.on("error", () => { console.log("Houver um erro") })
db.once("open", () => { console.log("Banco carregado") })


app.get('/', (req, res) => res.send('Hello Word!'))

app.listen(port, () => console.log('Running port ', port))