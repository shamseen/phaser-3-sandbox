/* ----- run with node app/index.js ----- */


/* --- Import API to use dom --- */
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/* --- Express server setup ---- */
// import express module
const express = require('express');
const { dirname } = require('path');

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



/* ---- Hookup server to DOM ---- */
const setupAuthoritativePhaser = () => {

    // JSDOM API loads index.html to render on
    // returns promise
    JSDOM.fromFile(path.join(__dirname, 'server/index.html'), {

    /* --- options to run file --- */
    // To run the scripts in the html file
    runScripts: "dangerously",

    // Also load supported external resources
    resources: "usable",

    // telling JSDOM to behave like a normal visual browser
    // So requestAnimatinFrame events fire
    pretendToBeVisual: true

    // waits for phaser lib to load before 
    // making game obj & starting server
    }).then((dom) => {
        // assign app to port 8081
        dom.window.gameLoaded = () => {
            console.log('index.js ================')
            server.listen(8081, () => {
                console.log(`Listening on ${server.address().port}`);
            });
            return dom.window;
        }
    }).catch(err => {
        console.log("index.js - " + err);
    });
}

setupAuthoritativePhaser();