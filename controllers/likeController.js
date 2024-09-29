const like = require("../models/likeModel");

exports.like = async(req, res) => {
    try{
        
    } catch(err){
        res.status(500)
        .json({
            sucess: false,
            message: "Server issues!"
        })
    }
}