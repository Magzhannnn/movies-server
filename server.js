const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const movieRoutes = require('./routes/movie-routes');

dotenv.config();

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
	.connect(process.env.URL)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err));

app.listen(PORT, err => {
	err ? console.log(err.message) : console.log(`listening port: ${PORT}`);
});
