const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: String,
    price: { type: Number, required: true },
    image: String
});

module.exports = mongoose.model('Shoe', shoeSchema);
