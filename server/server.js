console.log('First server! scary')

// Load the express library from node_modules/express:
const express = require('express');

// Create our "app," OUR SERVER: 
const app = express();

// Tell express where to find our "public" files: 
    // AKA the "client-side" files 
    // AKA the "static-assets"
    // AKA "all the stuff we've been working on"
app.use(express.static('./server/public'));

// Starts the server & listens for requests: 
app.listen(5000, function () {
    console.log('My first server is up and running!')
});
