// will contain routes (based off api.js)

const { Router } = require("express");

// GET /api/workouts => should return all workouts in the database
// PUT /api/workouts => should add an exercise to the workout
// POST /api/workouts => create a new workout
// GET /api/workouts/range => return last 7 workouts
router.get("/workouts", async function(req,res){

});

router.put("/workouts/:id", async function(req,res){
    
});

router.post("/workouts", async function(req,res){
    
});

router.get("/workouts", async function(req,res){
    
});

// per office hours

module.exports = router;