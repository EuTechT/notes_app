module.exports.index = function(app, req, res) {
  const connection = app.config.dbConnection()
  const notesDAO = new app.app.models.NotesDAO(connection)

  notesDAO.getNotes((error, result) => {
    res.render('home/index', { notes: result.rows })
  })
}