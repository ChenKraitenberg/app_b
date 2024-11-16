const express = require("express");
const router = express.Router();
const Postcontroller = require("../controllers/post");

router.get("/", Postcontroller.getAllPosts);

router.post("/", Postcontroller.creatPost);

module.exports = router;
