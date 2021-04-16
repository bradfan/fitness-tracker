const router = require("express").Router();
const { Workout } = require("../models");

// GET /api/workouts => should return all workouts in the database
// per office hours
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

// PUT /api/workouts => should add an exercise to the workout
router.put("/workouts/:id", async function (req, res) {
  try {
    const data = await Workout.updateOne(
      {
        id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// POST /api/workouts => create a new workout
router.post("/workouts", async function (req, res) {
  const data = await
  Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET /api/workouts/range => return last 7 workouts
router.get("/workouts/range", async function (req, res) {
  try {
    const data = await Workout.aggregate([
      { $limit: 7 },
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
          numExercises: {
            $sum: "$exercises.name",
          },
          totalWeight: {
            $sum: "$exercises.pounds",
          },
          totalSets: {
            $sum: "$exercises.sets",
          },
          totalReps: {
            $sum: "$exercises.reps",
          },
          totalDistance: {
            $sum: "exercise.distance",
          },
        },
      },
    ]);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// router.get("/workouts", async function (req, res) {
//   try {
//     const data = await Workout.aggregate([
//       {
//         $addFields: {
//           totalDuration: {
//             $sum: "exercises.duration",
//           },
//         },
//       },
//     ]);
//     res.json(data);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(500).send(err);
// });

module.exports = router;
