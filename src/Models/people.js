const { UUID } = require('mongodb');
const { Schema, model } = require('mongoose');

const peopleSchema = new Schema({
    id: UUID,
    name: String,
    height: Number,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: Array,
    species: Array,
    vehicles: Array,
    startships: Array,
    created: String,
    edited: String,
    url: String    
})

const People = model('People', peopleSchema)

module.exports = People;