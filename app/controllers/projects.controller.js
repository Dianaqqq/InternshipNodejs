"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Initialize_1 = require("../initialize/Initialize");
var router = express_1.Router();
router.get('/', function (req, res) {
    var projects = Initialize_1.Initialize.initializeProjects();
    return res.json(projects);
});
router.get('/:projectId', function (req, res) {
    console.log('Path Params ', req.params);
    var projectId = req.params.projectId;
    var findId = Initialize_1.Initialize.initializeProjects().filter(function (project) { return project.id === projectId; })[0];
    res.send("" + projectId);
});
exports.ProjectsController = router;
//
//
// static findFinishedStories (){
//     let storiesArr: Array<Story> = [];
//     // Project projects
//     const projects = Initialize.initializeProjects();
//     projects.forEach(project => console.log(this.findFinishedStoriesForProject(project)));
//
// }
//
// static findFinishedStoriesForProject(project: Project): Array<Story> {
//     return project.stories.filter(story => story.isFinished() == true);
// }
// static findProject(projectId: number): Project{
//     return Initialize.initializeProjects().filter(project => project.id === projectId)[0];
// }
