require('dotenv').config()
const express = require('express');

const { peopleRoutes, filmRoutes, starshipRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/people', peopleRoutes)
app.use('/api/films', filmRoutes)
app.use('/api/starship', starshipRoutes)


module.exports = app;