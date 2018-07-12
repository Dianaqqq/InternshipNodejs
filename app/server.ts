// Import everything from express and assign it to the express variable
import {Express, Request, Response} from "express";
import * as bodyParser from 'body-parser';

const express =require('express');
// Import WelcomeController from controllers entry point
import * as fromControllers from './controllers';

// Create a new express application instance
const app: Express = express();
// The port the express app will listen on

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
// Mount the WelcomeController at the /welcome route
app.use('/users', fromControllers.UsersController);
// Serve the application at the given port

app.use('/projects', fromControllers.ProjectsController);

app.use('/stories', fromControllers.StoriesController);

app.use('/weather', fromControllers.WeatherController);

const port = process.env.PORT || '8080';
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`);
});