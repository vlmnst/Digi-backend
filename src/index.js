require('dotenv').config()
const express = require('express');

const { peopleRoutes, filmRoutes, starshipRoutes, planetRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/people', peopleRoutes)
app.use('/api/films', filmRoutes)
app.use('/api/starship', starshipRoutes)
app.use('/api/planets', planetRoutes)


module.exports = app;