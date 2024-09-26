const blogs = require("../models/Blog");

exports.posts = async(req, res) => {
    try{
        const posts = await blogs.find();
        res.status(200)
        .json({
            sucess: true,
            data: posts,
            message: "Posts retrieved successfully"
        })
    } catch(err){
        res.status(500)
        .json({
            sucess: false,
            message: "Server issues!"
        })
    }
}