"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assign router to the express.Router() instance
var express_1 = require("express");
var router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', function (req, res) {
    res.send('<h1 style="color: red">Hello, World!</h1>');
});
router.get('/:userId', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.userId;
    /**
     * {
     *     name: '',
     *     secondName: ''
     * }
     */
    // Greet the given name
    res.send("Hello, " + name);
});
router.get('/:userId/posts', function (req, res) {
    // Extract the name from the request parameters
    console.log('Query Request ', req.query);
    console.log('Path Params ', req.params);
    var name = req.params.name;
    var age = req.query.age;
    /**
     * {
     *     name: '',
     *     secondName: ''
     * }
     */
    // Greet the given name
    res.send("Hello, " + name + " - age: " + age);
});
router.get('/:userId/posts/:postId', function (req, res) {
    // Extract the name from the request parameters
    console.log('Query Request ', req.query);
    console.log('Path Params ', req.params);
    var name = req.params.name;
    var age = req.query.age;
    /**
     * {
     *     name: '',
     *     secondName: ''
     * }
     */
    // Greet the given name
    res.send("Hello, " + name + " - age: " + age);
});
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
