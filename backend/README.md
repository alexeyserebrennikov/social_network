# Backend for Social Network

This is the backend part of the **Social Network** project. It is built using **Node.js**, **Express**, **PostgreSQL**, and **GraphQL**. Below are the steps to set up and run the backend server.

## Requirements

Make sure you have **PostgreSQL** installed and running. You also need to create a `.env` file in the `backend` directory with the following structure:

### .env file

You need to create a `.env` file in the `backend/` directory based on the following template:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=social_network
DB_USER=postgres
DB_PASSWORD=1
PORT=4000
