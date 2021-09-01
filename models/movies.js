const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 100,
        minlength: 3,
        required: true
    },
    genre: {
        type: String,
        minlength: 3,
        maxlength: 20,
        default: 'unknown'
    },
    plot: {
        type: String,
        minlength: 5,
        maxlength: 150,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;