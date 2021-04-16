const router = require("express").Router();
const path = require("path");
// const view = path.resolve(__dirname); ask Tucker/TA what this is?

// create a route for each HTML file

router.get("/", function(req, res) {
  res.sendFile()
})

app.post("/api/exercise", (req, res) => {
  console.log(req.body);

  res.end();
});

app.post("/api/stats", (req, res) => {
  console.log(req.body);

  res.end();
});

app.post("/api/workouts", (req, res) => {
  console.log(req.body);

  res.end();
});



module.exports = router;

