const UserModel = require("../models/UserModel");

const getUsers = async () => {
  return await UserModel.getAllUsers();
};

const addUser = async (name, email) => {
  return await UserModel.createUser(name, email);
};

module.exports = {
  getUsers,
  addUser,
};
