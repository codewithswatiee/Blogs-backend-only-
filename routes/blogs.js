const express = require("express");
const router = express.Router();

// imports
const {comment} = require("../controllers/commentController");
const {createPost, getPosts} = require("../controllers/postController");
const {like, unlikePost} = require("../controllers/likeController");
// routes
router.post('/comment/create', comment); //testing done
router.post('/posts/create', createPost); //testing done
router.get('/posts', getPosts); //testing done
router.post('/likes/like', like);
router.post('/likes/unlike', unlikePost);
module.exports = router;