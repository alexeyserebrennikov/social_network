const db = require('../db');

const UserModel = {
  getAllUsers: () => {
    return db.any('SELECT * FROM users');
  },

  getUserById: (id) => {
    return db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
  },

  createUser: (name, email) => {
    return db.none(
      'INSERT INTO users (username, email) VALUES ($1, $2)', 
      [name, email]
    );
  },
};

module.exports = UserModel;