const User = require('./user');
const Park = require('./park');
const Review = require('./review');

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



module.exports = { 
    User, 
    Park, 
    Review,
};

