const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
module.exports = { User, Post, Comment };
//import and export comment
//connect comment to user and post 
// finish routes for comment
//make comment text in frontend
// finish comment.js in public 
//comment belongs to user
//comment belongs to psot 
//user has menny comments 
//post has menny comments