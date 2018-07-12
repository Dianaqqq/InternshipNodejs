"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(id, title, archived, stories) {
        var _this = _super.call(this, id, title) || this;
        _this._archived = archived;
        _this._stories = stories;
        return _this;
    }
    Project.prototype.isArchived = function () {
        if (this._archived == true) {
            return true;
        }
        else
            return false;
    };
    Object.defineProperty(Project.prototype, "archived", {
        set: function (archived) {
            this._archived = archived;
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.addStory = function (story) {
        this._stories.push(story);
    };
    Object.defineProperty(Project.prototype, "stories", {
        get: function () {
            return this._stories;
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.removeStory = function (story) {
        //remove from Array from Story
        var index = this._stories.indexOf(story);
        this._stories.splice(index, 1);
    };
    return Project;
}(Entity_1.Entity));
exports.Project = Project;
