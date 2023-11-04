const { UUID } = require('mongodb');
const { Schema, model } = require('mongoose');

const startshipSchema = new Schema({
    id: UUID,
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    birth_year: String,
    characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
    created: String,
    edited: String,
    url: String    
})

const Startship = model('Startship', startshipSchema)

module.exports = Startship;