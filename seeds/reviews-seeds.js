const { Review } = require('../models');

const reviewData = [
    {
        review_text: 'This park has sand box.',
        user_id: 1,
        park_id: 1,
    },
    {
        review_text: 'This place also has slides.',
        user_id: 2,
        park_id: 1,
    },
    {
        review_text: 'Yeah, but the playground was beat up.',
        user_id: 3,
        park_id: 1,
    },
    {
        review_text: 'My son loves to play soccer here.',
        user_id: 1,
        park_id: 2,
    },
    {
        review_text: 'Perfect for picnics.',
        user_id: 3,
        park_id: 2,
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;