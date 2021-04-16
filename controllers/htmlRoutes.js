const router = require("express").Router();
const path = require("path");
const view = path.resolve(__dirname);

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

// create a route for each HTML file

module.exports = router;

