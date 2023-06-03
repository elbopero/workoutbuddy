const {
    createWorkout,
    getWorkout,
    getWorkouts
    }
 = require('../controllers/workoutController')

const express = require('express')
const Workout = require('../models/workoutModel')


const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msssg: 'DELETE new workout'})
})

// UPDATE  a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE workout'})
})

module.exports = router