module.exports.setNote = (app, req, res) => {
  const connection = app.config.dbConnection()
  const note = new app.app.models.Note()
  const noteDAO = new app.app.models.NoteDAO(connection)

  note.setUserId(req.body.userId)
  note.setTitle(req.body.title)
  note.setNote(req.body.note)
  note.setCreationTimestamp((new Date).toISOString())
  note.setUpdateTimestamp((new Date).toISOString())

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
        res.render('note', { note: result.rows[0]})
      })
      .catch(err => {
        res.send('Error 500: Internal Server Error')
      })
  } else {
    res.send('Error 403: Forbidden Access')
  }
}

module.exports.deleteNote = (app, req, res) => {
  const connection = app.config.dbConnection()
  const note = new app.app.models.Note()
  const noteDAO = new app.app.models.NoteDAO(connection)

  note.setId(req.params.id)
  noteDAO.delete(note)
    .then(result => {
      res.status(200).json({ deletedNote: true })
    })
    .catch(err => {
      res.send('Error 500: Internal Server Error')
    })
}

module.exports.updateNote = (app, req, res) => {
  const connection = app.config.dbConnection()
  const note = new app.app.models.Note()
  const noteDAO = new app.app.models.NoteDAO(connection)

  note.setId(req.params.id)
  note.setTitle(req.body.title)
  note.setNote(req.body.note)
  note.setUpdateTimestamp((new Date).toISOString())
  noteDAO.update(note)
    .then(result => {
      res.status(200).json({ updatedNote: true })
    })
    .catch(err => {
      res.send('Error 500: Internal Server Error')
    })
}