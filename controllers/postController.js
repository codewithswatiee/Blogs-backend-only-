const Post = require("../models/postModel");

exports.createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body,
        })

        const savedPost = await post.save();
        res.json({
            post: savedPost
        })
    } catch(err){
        res.status(500)
        .json({
            message: "Server issues!"
        })
    }
}

exports.getPosts = async(req, res) => {
    try{
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    } catch(err){
        res.status(500)
        .json({
            success: false,
            message: "get post issues!"
        })
    }
}