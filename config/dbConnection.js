const pg = require('pg')

function dbConnection() {
  return new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'notes_app',
    user: 'postgres',
    password: 'admin'
  })
}

module.exports = () => dbConnection