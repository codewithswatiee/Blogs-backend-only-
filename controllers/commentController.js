const Comment = require("../models/commentModel");
const Post = require("../models/postModel");


exports.comment = async(req, res) => {
    try{
        // fetch data from req body
        const {post, user, body} = req.body;
        // create a new comment
        const comment = new Comment({
            post, user, body
        });

        const savedComment = await comment.save();

        // find the post by ID and then add the new comment to that post
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments : savedComment._id}}, {new: true})
                            .populate("comments") //populate the comments array with comment documents
                            .exec();
        res.json({
            post: updatedPost,
        })
    } catch(err){
        res.status(500)
        .json({
            sucess: false,
            message: "Error While Creating comment!"
        })
    }
}