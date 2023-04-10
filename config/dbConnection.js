const pg = require('pg')

function dbConnection() {
  return new pg.Client({
    host: 'dpg-cgq7k3m4dadce8312qcg-a',
    port: 5432,
    database: 'notes_app_kblp',
    user: 'notes_app_kblp_user',
    password: 'H2EboA2KxhGqeadrsqYwbXaAsOzKNQhj'
  })
}

module.exports = () => dbConnection