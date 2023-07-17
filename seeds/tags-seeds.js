const {Tag} = require('../models');

//list of facility/ulitily to be used for reviews. This will not need CRUD routes for MVP.
const tagData = [
    {
        name: 'General',
    },
    {
        name: 'Playground',
    },
    {
        name: 'Baseball Field',
    },
    {
        name: 'Soccer FIeld',
    },
    {
        name: 'Basketball Court',
    },
    {
        name: 'Other',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;