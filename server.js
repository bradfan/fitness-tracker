const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// set up the express app
 const app = express();
 const PORT = process.env.PORT || 3001;
app.use(morgan("dev"));
app.use(require("./routes"));
// middleware
app.use(express.static(path.join(__dirname, 'public')));
//  (below middleware)for PUT and POST routes - comment these to see what happens (after it's running.)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });

//   next: install npm i, express, morgan, mongoose