"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//external import
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
//internal import
//middleware
require("dotenv").config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
//db connection
//routes
app.get("/", function (req, res) {
    res.send("Hello world!!");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
