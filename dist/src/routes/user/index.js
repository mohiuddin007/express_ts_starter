"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var user_1 = __importDefault(require("../../controller/user"));
var express = require("express");
var router = express.Router();
var User = new user_1.default();
router.get("/", User.getAllUser);
router.post("/query", User.getAllUser);
router.put("/:id", User.updateUser);
router.delete("/:id");
router.post("/login", User.login);
router.post("/register", User.register);
module.exports = router;
