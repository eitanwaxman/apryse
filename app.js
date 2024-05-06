// Import the express module
const express = require('express');
const path = require('path');

// Create an instance of express
const app = express();

// Define the port to run the server on
const port = process.env.PORT || 3000;

// Specify the directory to serve static files from
const publicDirectory = path.join(__dirname, 'public');

// Use express.static to serve the 'public' directory
app.use(express.static(publicDirectory));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
