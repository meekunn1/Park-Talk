const {Tag} = require('../models');

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