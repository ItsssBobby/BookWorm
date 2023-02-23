const User = require('./user');
const Post = require('./book');
const Comment = require('./comments');

Book.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Book.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};