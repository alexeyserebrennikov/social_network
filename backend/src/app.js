// src/app.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./db'); // Подключаем базу данных
const config = require('./config');
const userSchema = require('./schema/userSchema');
const userResolvers = require('./resolvers/userResolvers');

async function startServer() {
  const app = express();

  // Создаем сервер Apollo
  const server = new ApolloServer({
    typeDefs: userSchema,
    resolvers: userResolvers,
    context: () => ({
      db, // Передаем подключение к БД в контекст
    }),
  });

  // Ждем, пока сервер не будет запущен
  await server.start();

  // Подключаем Apollo Middleware к Express
  server.applyMiddleware({ app });

  // Запускаем сервер
  app.listen(config.port, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
  });
}

// Запускаем сервер
startServer().catch((error) => {
  console.error('Error starting server:', error);
});




