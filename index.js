const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome To The Class-1 Of Coding Club");
});

app.get("/about", (req, res) =>{
    res.send("This is the about page")
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})