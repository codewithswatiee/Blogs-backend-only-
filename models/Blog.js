const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        maxLength: 200,
        required: true,
    },
    comment: {
        type: String,
        maxLength: 200,
        required: true,
    },
    createdAt : {
        type: Date,
        default: Date.now(),
        required: true,
    },
    updatedAt: {
        type: Date,
        required : true,
        default: Date.now(),
    },
    likes: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Blog", BlogSchema);