const express = require('express');
const mongoose = require('mongoose');
const {
	getMovies,
	getMovie,
	deleteMovie,
	addMovie,
	updateMovie,
} = require('../controllers/movieController');

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', addMovie);
router.patch('/movies/:id', updateMovie);

module.exports = router;
