const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// set up the express app
const app = express();
const PORT = process.env.PORT || 3001;
app.use(morgan("dev"));

// middleware
app.use(express.static(path.join(__dirname, "public")));
//  (below middleware)for PUT and POST routes - comment these to see what happens (after it's running.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });
mongoose.connection.once("open", ()=>{
    app.listen(PORT, ()=> {
        console.log ("Server: 3001")
    })
}) 




