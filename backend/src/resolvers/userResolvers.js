const UserModel = require("../models/UserModel");

const userResolvers = {
  Query: {
    users: async () => await UserModel.getAllUsers(),
    user: async (_, { id }) => await UserModel.getUserById(id),
  },
  Mutation: {
    createUser: async (_, { name, email }) => await UserModel.createUser(name, email),
  },
};

module.exports = userResolvers;
