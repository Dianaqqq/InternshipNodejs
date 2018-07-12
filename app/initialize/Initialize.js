"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fromTypes = require("../types");
var Initialize = /** @class */ (function () {
    function Initialize() {
    }
    Initialize.initializeTasks = function () {
        var tasks = [new fromTypes.Task(1, "First Task", false, 2),
            new fromTypes.Task(2, "Second Task", true, 3),
            new fromTypes.Task(3, "Third Task", false, 4)];
        return tasks;
    };
    Initialize.initializeStories = function () {
        var stories = [new fromTypes.Story(4, "4th Task", true, "yes", this.initializeTasks()),
            new fromTypes.Story(5, "5th Task", false, "no", this.initializeTasks())];
        return stories;
    };
    Initialize.initializeProjects = function () {
        var projects = [new fromTypes.Project(6, "6th Task", true, this.initializeStories()),
            new fromTypes.Project(7, "7th Task", false, this.initializeStories())
        ];
        return projects;
    };
    Initialize.initializeEntities = function () {
        var entities = [new fromTypes.Entity(8, "8th Task"),
            new fromTypes.Entity(9, "9th Task")];
        return entities;
    };
    return Initialize;
}());
exports.Initialize = Initialize;
