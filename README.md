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

4. setup the Sqlite database:

```
npm run init-model

npm run db-migrate

npm run db-seed-all
```

5. verify DB has been created:

```
ls -la

drwxr-xr-x   18 emanuele.colonnelli  staff     576 Dec 17 18:51 .
drwxr-xr-x   12 emanuele.colonnelli  staff     384 Dec 18 01:15 ..
-rw-r--r--    1 emanuele.colonnelli  staff     108 Dec 16 15:04 .env
-rw-r--r--    1 emanuele.colonnelli  staff    1497 Dec 17 07:35 app.js
drwxr-xr-x    3 emanuele.colonnelli  staff      96 Dec 15 23:06 config
drwxr-xr-x    4 emanuele.colonnelli  staff     128 Dec 16 22:39 controllers
**-rw-r--r--    1 emanuele.colonnelli  staff  159744 Dec 17 18:51 database.sqlite3**
-rw-r--r--    1 emanuele.colonnelli  staff    1477 Dec 16 11:47 db-seeder.js
drwxr-xr-x    4 emanuele.colonnelli  staff     128 Dec 17 18:31 lib
drwxr-xr-x    5 emanuele.colonnelli  staff     160 Dec 16 14:53 middlewares
drwxr-xr-x    3 emanuele.colonnelli  staff      96 Dec 16 11:15 migrations
drwxr-xr-x    4 emanuele.colonnelli  staff     128 Dec 15 23:11 models
drwxr-xr-x  370 emanuele.colonnelli  staff   11840 Dec 16 22:34 node_modules
-rw-r--r--    1 emanuele.colonnelli  staff  133027 Dec 16 22:34 package-lock.json
-rw-r--r--    1 emanuele.colonnelli  staff    1320 Dec 16 22:57 package.json
drwxr-xr-x    4 emanuele.colonnelli  staff     128 Dec 16 15:12 routes
drwxr-xr-x    3 emanuele.colonnelli  staff      96 Dec 16 11:13 seeders
drwxr-xr-x    3 emanuele.colonnelli  staff      96 Dec 16 14:55 tests
```

6. run tests and check that all of them pass... the should! :)

```
npm run test
```

7. start the server: `node app.js`

8. To run debugger under VSCode, here is a working and basic launch.json file:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach by Process ID",
            "processId": "${command:PickProcess}",
            "request": "attach",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "pwa-node"
        }
    ]
}
```

Just type `npm run debug`, then start debugger from VSCode and pick the process from the dropdown.
