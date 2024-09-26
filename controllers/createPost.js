const blogs = require("../models/Blog");

exports.createPost = async(req, res) => {
    try{
        const {title, description} = req.body;
        const response = await blogs.create({title, description});

        res.status(200).json({
            success: true,
            data: response,
            message: "Blog Created successfully"
        })
    } catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            message: "Server Issue!"
        })
    }
}