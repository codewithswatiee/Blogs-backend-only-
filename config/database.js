const mongoose = require("mongoose")
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect;