const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn , isOwner , validatePosting} = require("../middleware.js");
const postingController = require("../controllers/postings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

//Index route
router.get("/" , wrapAsync(postingController.index));

//new route
router.get("/new" , isLoggedIn , postingController.newForm);

//Show route
router.get("/:id" , wrapAsync(postingController.showPosting));

//create route
router.post("/" , isLoggedIn , upload.single('posting[image]') , validatePosting  , wrapAsync(postingController.createPosting));

//edit route
router.get("/:id/edit" , isLoggedIn , isOwner , wrapAsync(postingController.editPosting));

//update route
router.put("/:id" , isLoggedIn , isOwner , upload.single('posting[image]') , validatePosting , wrapAsync(postingController.updatePosting));

//Delete route
router.delete("/:id" , isLoggedIn , isOwner , wrapAsync(postingController.deletePosting));

module.exports = router;