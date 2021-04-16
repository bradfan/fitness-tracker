const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");

// create a route for each HTML file

router.get("/", function (req, res) {
  console.log(req.body);
  res.sendFile(path.join(viewDir, "index.html"));
});

router.get("/exercise", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(viewDir, "exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(viewDir, "stats.html"));
});

module.exports = router;
