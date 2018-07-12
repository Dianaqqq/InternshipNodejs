"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(id, title) {
        this._title = title;
        this._id = id;
        this._creationDate = new Date();
    }
    Object.defineProperty(Entity.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "getCreationDate", {
        get: function () {
            return this._creationDate;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
exports.Entity = Entity;
