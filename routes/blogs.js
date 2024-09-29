const express = require("express");
const router = express.Router();

const {comment} = require("../controllers/commentController");

router.post('/comment/create', comment)

module.exports = router;