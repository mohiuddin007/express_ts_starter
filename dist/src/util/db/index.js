"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DbConnection = /** @class */ (function () {
    function DbConnection(url) {
        try {
            mongoose
                .connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
                .then(function () { return console.log("mongodb connection established. 🌹 📡"); });
        }
        catch (error) {
            console.log({ DbConnection: error });
        }
    }
    return DbConnection;
}());
exports.default = DbConnection;
