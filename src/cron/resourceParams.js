const People = require("../Models/people");

const resourcesParams = [
    {
        url: '/people',
        model: People,
        findOneKey: 'name'
    },

]

module.exports = resourcesParams;