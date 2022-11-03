const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
//import and export comment
//connect comment to user and post 
// finish routes for comment
//make comment text in frontend
// finish comment.js in public 