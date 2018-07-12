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
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(id, title, finished, priority) {
        var _this = _super.call(this, id, title) || this;
        _this._finished = finished;
        _this._priority = priority;
        return _this;
    }
    Task.prototype.isFinished = function () {
        if (this._finished == true) {
            return true;
        }
        else
            return false;
    };
    Object.defineProperty(Task.prototype, "finished", {
        set: function (finished) {
            this._finished = finished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (priority) {
            this._priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}(Entity_1.Entity));
exports.Task = Task;
