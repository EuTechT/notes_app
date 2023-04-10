const pg = require('pg')

function dbConnection() {
  // return new pg.Client({
  //   host: 'dpg-cgq7k3m4dadce8312qcg-a',
  //   port: 5432,
  //   database: 'notes_app_kblp',
  //   user: 'notes_app_kblp_user',
  //   password: 'H2EboA2KxhGqeadrsqYwbXaAsOzKNQhj'
  // })

  new pg.Client('postgres://notes_app_kblp_user:H2EboA2KxhGqeadrsqYwbXaAsOzKNQhj@dpg-cgq7k3m4dadce8312qcg-a.oregon-postgres.render.com/notes_app_kblp')
}

module.exports = () => dbConnection