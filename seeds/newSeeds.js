const sequelize = require('../config/connection');
const { User, Park, Review } = require('../models');

const userData = require('./userData.json');
const parkData = require('./parkData.json');
const reviewData = require('./reviewData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Park.bulkCreate(parkData, {
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Review.bulkCreate(reviewData, {
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
