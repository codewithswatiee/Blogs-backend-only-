const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
    }]
})

module.exports = mongoose.model("post", postSchema);