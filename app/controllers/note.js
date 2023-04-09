module.exports.setNote = (app, req, res) => {
  const connection = app.config.dbConnection()
  const note = new app.app.models.Note()
  const noteDAO = new app.app.models.NoteDAO(connection)

  note.setUserId(req.body.userId)
  note.setTitle(req.body.title)
  note.setNote(req.body.note)

  noteDAO.insert(note)
    .then(result => {
      res.redirect('/home')
    })
    .catch(err => {
      res.send('Error 500: Internal Server Error')
    })
}

module.exports.getNote = (app, req, res) => {
  if (req.session.authenticated) {
    const connection = app.config.dbConnection()
    const note = new app.app.models.Note()
    const noteDAO = new app.app.models.NoteDAO(connection)

    note.setId(req.params.id)
    noteDAO.select(note)
      .then(result => {
        res.send(result.rows)
      })
      .catch(err => {
        res.send('Error 500: Internal Server Error')
      })
  } else {
    res.send('Error 403: Forbidden Access')
  }
}