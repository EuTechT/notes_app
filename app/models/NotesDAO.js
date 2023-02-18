function NotesDAO(connection) {
  this._connection = connection
}

NotesDAO.prototype.getNotes = function(callback) {
  this._connection.connect()
  this._connection.query('SELECT * FROM notes ORDER BY creation_date_and_time DESC', callback)
}

NotesDAO.prototype.getNote = function(id, callback) {
  this._connection.connect()
  this._connection.query(`SELECT * FROM notes WHERE id=${id}`, callback)
}

NotesDAO.prototype.setNote = function(values, callback) {
  this._connection.connect()
  this._connection.query('INSERT INTO notes(title, description) VALUES($1, $2) RETURNING *', values, callback)
}

NotesDAO.prototype.deleteNote = function(id, callback) {
  this._connection.connect()
  this._connection.query(`DELETE FROM notes WHERE id=${id} RETURNING *`, callback)
}

NotesDAO.prototype.updateNote = function(note, callback) {
  console.log(note)
  this._connection.connect()
  this._connection.query(`UPDATE notes SET title='${note.title}', description='${note.description}' WHERE id=${note.id}`, callback)
}

module.exports = function() {
  return NotesDAO
}