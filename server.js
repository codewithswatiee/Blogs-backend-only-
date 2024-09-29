const express = require("express");
const blogs = require("./routes/blogs");
const dbConnect = require("./config/database")
require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json()); //middleware
app.use('/api/blogs', blogs); //mount

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
dbConnect();

app.get("/", (req, res) => {
    res.send("Hello World! Welcome to the Blogging Website");
})


