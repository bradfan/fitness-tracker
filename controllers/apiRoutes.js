const router = require("express");
const { Workout } = require("../models");

// GET /api/workouts => should return all workouts in the database

router.get("/workouts", async function (req, res) {
  try {
    const data = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "exercises.duration",
          },
        },
      },
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
  res.status(500).send(err);
});

router.put("/workouts/:id", async function (req, res) {
  // PUT /api/workouts => should add an exercise to the workout
});

router.post("/workouts", async function (req, res) {
  // POST /api/workouts => create a new workout
});

router.get("/workouts", async function (req, res) {
  // GET /api/workouts/range => return last 7 workouts
});

// per office hours

module.exports = router;
