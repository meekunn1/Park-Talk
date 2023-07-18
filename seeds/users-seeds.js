const { User } = require('../models');

const userData = [
    {
        name: 'anonymouse',
        email: 'amouse@gmail.com',
        password: 'secret123',
    },
    {
        name: 'anonycat',
        email: 'acat@gmail.com',
        password: 'secret246',
    },
    {
        name: 'anonydog',
        email: 'adog@gmail.com',
        password: 'secret135',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;