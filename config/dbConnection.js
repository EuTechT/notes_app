const pg = require('pg')

function dbConnection() {
  return new pg.Client({
    host: 'dpg-cgqcaim4dad5es046a70-a',
    port: 5432,
    database: 'notes_app_render_eeje',
    user: 'notes_app_render_eeje_user',
    password: '2VncpLZFVA3jS2hl8F8e3ehcgkaCedUR'
  })
}

module.exports = () => dbConnection