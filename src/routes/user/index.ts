import UserClass from "../../controller/user";

const express = require("express");
const router = express.Router();

const User = new UserClass();

router.get("/", User.getAllUser);
router.post("/query", User.getAllUser);
router.put("/:id", User.updateUser);
router.delete("/:id");
router.post("/login", User.login);
router.post("/register", User.register);

export = router;