const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.like = async (req, res) => {
    try {
        const { post, user } = req.body;

        // Validate input
        if (!post || !user) {
            return res.status(400).json({
                success: false,
                message: "Post ID and User ID are required!"
            });
        }

        const like = new Like({
            post,
            user,
        });

        const savedLike = await like.save();
        
        // Update the post with the new like
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        ).populate("likes").exec();

        res.json({
            success: true,
            post: updatedPost,
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Server issues!",
        });
    }
};


exports.unlikePost = async(req, res) => {
    try{
        const {post, like} = req.body;

        const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true})
        res.json({
            post: updatedPost,
        })

    } catch(err){
        res.status(500)
        .json({
            sucess: false,
            message: "Server issues!"
        })
    }
}