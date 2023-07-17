const { ReviewTag } = require('../models');

const reviewTagData = [
    {
        review_id: 1,
        tag_id: 2,
    },
    {
        review_id: 2,
        tag_id: 2,
    },
    {
        review_id: 3,
        tag_id: 2,
    },
    {
        review_id: 4,
        tag_id: 4,
    },
    {
        review_id: 5,
        tag_id: 1,
    },
];

const seedReviewTags = () => ReviewTag.bulkCreate(reviewTagData);

module.exports = seedReviewTags;