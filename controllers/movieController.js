const Movie = require('../models/movie');

const handleError = (res, error) => {
	res.status(500).json({ error });
};

const getMovies = (req, res) => {
	Movie.find()
		.sort({ rating: -1 })
		.then(movies => {
			res.status(200).json(movies);
		})
		.catch(err => handleError(res, err.message));
};

const getMovie = (req, res) => {
	const id = req.params.id;

	Movie.findById(id)
		.then(movie => {
			res.status(200).json(movie);
		})
		.catch(err => handleError(res, err.message));
};

const deleteMovie = (req, res) => {
	const id = req.params.id;

	Movie.findByIdAndDelete(id)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => handleError(res, err.message));
};

const addMovie = (req, res) => {
	const movie = new Movie(req.body);

	movie
		.save()
		.then(result => {
			res.status(201).json(result);
		})
		.catch(err => handleError(res, err.message));
};

const updateMovie = (req, res) => {
	const id = req.params.id;

	Movie.findByIdAndUpdate(id, req.body)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => handleError(res, err.message));
};

module.exports = {
	getMovies,
	getMovie,
	deleteMovie,
	addMovie,
	updateMovie
};
