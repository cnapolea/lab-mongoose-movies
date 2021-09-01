const mongoose = require('mongoose');
const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 20,
        minlength: 3,
        required: true
    },
    occupation: {
        type: String,
        minlength: 3,
        maxlength: 20,
        default: 'unknown'
    },
    catchPhrase: {
        type: String,
        minlength: 5,
        maxlength: 30,
        required: true
    }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;