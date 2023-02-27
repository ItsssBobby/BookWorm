const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for posts
class Post extends Model {}
Post.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {model: "user", key: "id"}
    // }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
