const { UUID } = require('mongodb');
const { Schema, model } = require('mongoose');

const startshipSchema = new Schema({
    id: UUID,
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: Array,
    films: Array,
    created: String,
    edited: String,
    url: String,
})

const Startship = model('Startship', startshipSchema)

module.exports = Startship;