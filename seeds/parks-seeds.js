const { Park } = require('../models');

const parkData = [
    {
        address: 'geocode information placerholder-1',
    },
    {
        address: 'geocode information placerholder-2',
    },
    {
        address: 'geocode information placerholder-3',
    },
];

const seedParks = () => Park.bulkCreate(parkData);

module.exports = seedParks;