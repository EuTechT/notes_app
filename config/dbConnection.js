const pg = require('pg')

function dbConnection() {
  return new pg.Client({
    host: 'postgres://notes_app_kblp_user:H2EboA2KxhGqeadrsqYwbXaAsOzKNQhj@dpg-cgq7k3m4dadce8312qcg-a/notes_app_kblp',
    port: 5432,
    database: 'notes_app_kblp',
    user: 'notes_app_kblp_user',
    password: 'H2EboA2KxhGqeadrsqYwbXaAsOzKNQhj'
  })
}

module.exports = () => dbConnection