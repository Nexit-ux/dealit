const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.get("/signup" , userController.signUpreq);

router.post("/signup" , userController.signup);

router.get("/login" , userController.loginReq);

router.post("/login" , saveUrl , passport.authenticate("local" , {failureRedirect : "/login" , failureFlash : true}) , userController.updateLogin);

router.get("/logout" , userController.logout);

module.exports = router;