const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post', //this is a reference to 'post' model
    },
    user:{
        type: String,
        requried: true,
    },
    body: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("comment", commentSchema);