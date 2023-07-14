const seedParks = require('./parks-seeds');
const seedUsers = require('./users-seeds');
const seedReviews = require('./reviews-seeds');

const sequelize = require('../config/connection.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log(`synced with database`);
    await seedParks();
    console.log(`Parks table have been seeded.`);
    await seedUsers();
    console.log(`user table have been seeded.`);
    await seedReviews();
    console.log(`review table have been seeded.`);

    process.exit(0);
};

seedAll();
