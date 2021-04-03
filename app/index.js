// import express module
const express = require('express');

// express instance
const app = express();

// express as the http server
const server = require('http').Server(app);

// location of files to render
app.use(express.static(__dirname + '/public'));

// public/index.html as root
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// assign app to port 8081
server.listen(8081, function () {
    console.log(`Listening on ${server.address().port}`);
});

/* ----- run with node app/index.js ----- */