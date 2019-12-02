# node-boilerplate

[![Build Status](https://travis-ci.org/bbfdev/boiler-template.svg?branch=master)](https://travis-ci.org/bbfdev/boiler-template)
[![HitCount](http://hits.dwyl.io/bbfdev/tscobra-boiler-template.svg)](http://hits.dwyl.io/bbfdev/tscobra-boiler-template)

### Dependences
* [cors](https://github.com/expressjs/cors#readme) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [dotenv](https://github.com/motdotla/dotenv#readme) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
* [express](https://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [gulp-eslint](https://github.com/adametry/gulp-eslint#readme) - A gulp plugin for ESLint
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
* [morgan](https://github.com/expressjs/morgan#readme) - HTTP request logger middleware for node.js
* [pg](https://github.com/brianc/node-postgres) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
* [pg-hstore](https://github.com/scarney81/pg-hstore) - A node package for serializing and deserializing JSON data to hstore format
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
* [eslint](https://eslint.org/) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
* [gulp](https://gulpjs.com/) - The streaming build system
* [gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon) - gulp + nodemon + convenience
* [jest](https://jestjs.io/) - Delightful JavaScript Testing
* [sqlite3](https://github.com/mapbox/node-sqlite3) - Asynchronous, non-blocking SQLite3 bindings for Node.js.
* [sequelize-cli](https://github.com/sequelize/cli) - The Sequelize Command Line Interface (CLI)
* [cross-env](https://github.com/kentcdodds/cross-env#readme) - Run scripts that set and use environment variables across platforms


## Getting Started
The easiest way to get started is to clone the repository:
```sh
  # Get the latest snapshot
  $ git clone https://github.com/bbfdev/boiler-template.git myproject

  # Change directory
  cd myproject

  # Install NPM dependencies
  $ npm install
```
### Production mode :
after install packages with ``` npm install  ``` or ``` yarn install ``` run this command:
```sh
  $ sequelize db:create
  $ sequelize db:migrate
  $ npm start
```

### Development mode :
after install packages with ``` npm install  ``` or ``` yarn install ``` run this command:
```sh
  $ sequelize db:create
  $ sequelize db:migrate
  $ gulp
```
### Test mode :
after install packages with ``` npm install  ``` or ``` yarn install ``` run this command:
```sh
  $ npm test
```
now open http://localhost:5406 to view it in the browser

