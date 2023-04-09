module.exports.home = (app, req, res) => {
  if (req.session.authenticated) {
    const connection = app.config.dbConnection()
    const user = new app.app.models.User()
    const userDAO = new app.app.models.UserDAO(connection)
  
    user.setUser(req.session.user)
    user.setPassword(req.session.password)
    userDAO.select(user)
      .then(result => {
        const user = result.rows[0]
        const connection = app.config.dbConnection()
        const noteDAO = new app.app.models.NoteDAO(connection)
        noteDAO.selectAll(user.id)
          .then(result => {
            res.render('home', { user: user, notes: result.rows })
          })
      })
  } else {
    res.send('Error 403: Forbidden Access')
  }
}