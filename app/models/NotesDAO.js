function NotesDAO(connection) {
  this._connection = connection
}

NotesDAO.prototype.getNotes = function(callback) {
  this._connection.connect()
  this._connection.query('SELECT * FROM notes ORDER BY creation_date_and_time DESC', callback)
}

module.exports = function() {
  return NotesDAO
}