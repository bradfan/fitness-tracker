const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// set up the express app
const app = express();
const PORT = process.env.PORT || 8080;
app.use(morgan("dev"));

// middleware
// app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./controllers"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.connection.once("open", ()=>{
    app.listen(PORT, ()=> {
        console.log ("Server: 8080")
    })
}) 




