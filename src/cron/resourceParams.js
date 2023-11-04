const Film = require("../Models/films");
const People = require("../Models/people");
const Startship = require("../Models/startship");

const resourcesParams = [
    {
        url: '/people',
        model: People,
        findOneKey: 'name'
    },
    {
        url: '/films',
        model: Film,
        findOneKey: 'title'
    },
    {
        url: '/starships',
        model: Startship,
        findOneKey: 'name'
    }

]

module.exports = resourcesParams;