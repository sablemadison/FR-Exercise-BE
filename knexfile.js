// Update with your config settings.
require('dotenv').config({path: '../.env'});
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL,
  
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
   
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
