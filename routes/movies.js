const express = require('express');
const Movie = require('../models/movies');
const movieRouter = express.Router();

movieRouter.get('', (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render('movies/index', {
                movies
            });
        })
        .catch(error => next(error));
});

movieRouter.post('', (req, res, next) => {
    const data = req.body;
    
    Movie.create(data)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => next(error));
});

movieRouter.get('/create', (req, res, next) => {
    res.render('movies/create');
});

movieRouter.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render('movies/show', {
                movie
            });
        })
        .catch(error => next(error));
});

movieRouter.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => next(error));
});

module.exports = movieRouter;