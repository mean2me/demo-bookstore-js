# Demo Book Store

A simple demo app made with ReactJS + Node.js/Express + custom webpack.

## Requirements

This project has been developed using:

-   Node.js version v14.13.0
-   NPM version 6.14.9

## Main technologies covered in this project

### Frontend

-   React v.17
-   Webpack 5
-   Babel 7
-   ES2020
-   Redux/Sagas
-   React hooks
-   React Context API
-   Material UI v.4

### Backend

-   Node.js v14.13
-   ES2020
-   Sequelize 6
-   Sqlite3
-   Express v.4
-   Mocha v.8
-   Chai v.4
-   JWT authentication
-   CSRF token management

## Setup and run

### Backend

The first required step is to setup the backend.

1. from the root folder, type `cd backend`.
2. install all node dependencies: `npm install`
3. create a **.env** file:

```
NODE_ENV=development
APP_BASE_URL=http://localhost:3000
AUTH_SECRET_KEY=secret
USERNAME=admin
PASSWORD=admin
```

4. setup the Sqlilte database:

```
npm run init-model

npm run db-migrate

npm run db-seed-all
```
