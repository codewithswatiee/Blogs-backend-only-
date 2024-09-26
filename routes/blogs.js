const express = require("express");
const router = express.Router();


const {posts} = require("../controllers/posts");
const {createPost} = require("../controllers/createPost")

router.get("/posts", posts);
router.post("/posts/createPost", createPost);
module.exports = router;