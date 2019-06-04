const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended: false}));
mongoose.connect('mongodb://localhost:27017/notes-app', (err, result) => {
    if (err) {
        console.log("Connection error");
        process.exit(1);
    }
    console.log("Connected to mongo");
});

app.get('/', (req, res) => {

})