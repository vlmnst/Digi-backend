const Film = require("../Models/films");
const People = require("../Models/people");

const resourcesParams = [
    {
        url: '/people',
        model: People,
        findOneKey: 'name'
    },
    {
        url: '/films',
        model: Film,
        findOneKey: 'name'
    }

]

module.exports = resourcesParams;