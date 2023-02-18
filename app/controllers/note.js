module.exports.getNote = function(app, req, res) {
  const connection = app.config.dbConnection()
  const notesDAO = new app.app.models.NotesDAO(connection)

  notesDAO.getNote(req.query.id, (error, result) => {
    res.render('note/note', { note: result.rows[0] })
    connection.end()
  })
}

module.exports.setNote = function(app, req, res) {
  const connection = app.config.dbConnection()
  const notesDAO = new app.app.models.NotesDAO(connection)
  const values = Object.values(req.body)

  notesDAO.setNote(values, (error, result) => {
    connection.end()
    res.redirect('/')
  })
}

module.exports.deleteNote = function(app, req, res) {
  const connection = app.config.dbConnection()
  const notesDAO = new app.app.models.NotesDAO(connection)

  notesDAO.deleteNote(req.body.id, (error, result) => {
    if (result.rows.length > 0) {
      res.send(true)
    }
  })
}

module.exports.updateNote = function(app, req, res) {
  const connection = app.config.dbConnection()
  const notesDAO = new app.app.models.NotesDAO(connection)

  notesDAO.updateNote(req.body, (error, result) => {
    connection.end()
    res.send(true)
  })
}