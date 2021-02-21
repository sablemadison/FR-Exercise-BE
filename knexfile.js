// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env_DB_PASSWORD,
      database : process.env.DB_NAME,
      charset: 'utf8'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
  }

};
