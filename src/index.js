require('dotenv').config()
const express = require('express');

const { peopleRoutes, filmRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/people', peopleRoutes)
app.use('/api/films', filmRoutes)


module.exports = app;