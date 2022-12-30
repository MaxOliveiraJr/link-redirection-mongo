const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
const linkRoute = require('./routes/linkRoute')

const path = require('path');

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost/newlinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

let db = mongoose.connection;

db.on("error", () => { console.log("Houver um erro") })
db.once("open", () => { console.log("Banco carregado") })

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'templates'))

app.use('/', linkRoute);

app.listen(port, () => console.log('Running port ', port))


// let link = new Link({
//     title: 'progbr',
//     description: 'teste',
//     url: 'https://google.com.br',
//     click: 0,
// })

// link.save().then(doc => {
//     console.log(doc)
// }).catch(error => {
//     console.log(error)
// });

