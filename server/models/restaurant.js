const mongoose = require('mongoose');

const restSchema = mongoose.Schema({
    title: String,
    description: String,
    rating: String
});

module.exports = mongoose.model('Restaurant', restSchema);