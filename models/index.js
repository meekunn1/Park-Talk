const User = require('./user');
const Park = require('./park');
const Review = require('./review');
// const Tag = require('./tag');
// const ReviewTag = require('./reviewTag');

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Park.hasMany(Review, {
    foreignKey: 'park_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Park, {
    foreignKey: 'park_id'
});

// Tag.belongsToMany(Review, {
//     through: ReviewTag,
//     foreignKey: 'tag_id'
// });

// Review.belongsToMany(Tag, {
//     through: ReviewTag,
//     foreignKey: 'review_id'
// });



module.exports = { 
    User, 
    Park, 
    Review,
    // Tag,
    // ReviewTag,
};

