const express = require('express');
const app = express();
const config = require('./config/database');
const path = require('path')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect(config.uri, {useNewUrlParser: true, useUnifiedTopology: true} , (err)=> {
    if (err) {
        console.log('could NOT connect to database: ', err);
    } else {
        console.log('connected to database: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});

