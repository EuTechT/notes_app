const pg = require('pg')

function dbConnection() {
  return new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'notes_app'
  })
}

module.exports = function() {
  return dbConnection
}