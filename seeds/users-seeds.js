const {User} = require('../models');

const userData = [
    {
        username: 'anonymouse',
        email: 'amouse@gmail.com',
        password: 'secret123',
    },
    {
        username: 'anonycat',
        email: 'acat@gmail.com',
        password: 'secret246',
    },
    {
        username: 'anonydog',
        email: 'adog@gmail.com',
        password: 'secret135',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;