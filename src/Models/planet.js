const { UUID } = require('mongodb');
const { Schema, model } = require('mongoose');

const planetSchema = new Schema({
    id: UUID,
    name:String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: Array,
    films: Array,
    created: String,
    edited: String,
    url: String    
})

const Planet = model('Planet', planetSchema)

module.exports = Planet;