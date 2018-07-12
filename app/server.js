"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
// Import WelcomeController from controllers entry point
var fromControllers = require("./controllers");
// Create a new express application instance
var app = express();
// The port the express app will listen on
// Mount the WelcomeController at the /welcome route
app.use('/users', fromControllers.UsersController);
// Serve the application at the given port
app.use('/projects', fromControllers.ProjectsController);
app.use('/stories');
var port = process.env.PORT || '8080';
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
