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
var Story = /** @class */ (function (_super) {
    __extends(Story, _super);
    function Story(id, title, finished, responsible, tasks) {
        var _this = _super.call(this, id, title) || this;
        _this._finished = finished;
        _this._responsible = responsible;
        _this._tasks = tasks;
        return _this;
    }
    Story.prototype.isFinished = function () {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    };
    Object.defineProperty(Story.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "finished", {
        set: function (finished) {
            this._finished = finished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Story.prototype, "responsible", {
        get: function () {
            return this._responsible;
        },
        set: function (responsible) {
            this._responsible = responsible;
        },
        enumerable: true,
        configurable: true
    });
    Story.prototype.removeTask = function (task) {
        var index = this._tasks.indexOf(task);
        this._tasks.splice(index, 1);
    };
    return Story;
}(Entity_1.Entity));
exports.Story = Story;
