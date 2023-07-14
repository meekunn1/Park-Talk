const Users = require('./user');
const Parks = require('./park');
const Reviews = require('./review');

Users.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Users, {
    foreignKey: 'user_id'
});

Parks.hasMany(Reviews, {
    foreignKey: 'park_id',
    onDelete: 'CASCADE'
});

Reviews.belongsTo(Parks, {
    foreignKey: 'park_id'
});



module.exports = { 
    Users, 
    Parks, 
    Reviews 
};

