const post = require("../models/postModel");

exports.post = async(req, res) => {
    try{
        
    } catch(err){
        res.status(500)
        .json({
            sucess: false,
            message: "Server issues!"
        })
    }
}