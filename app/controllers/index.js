module.exports.index = (app, req, res) => {
  if (req.session.authenticated) {
    res.redirect('/home')
  } else {
    res.render('index', { userNotExists: false, user: {} })
  }
}

module.exports.login = (app, req, res) => {
  const connection = app.config.dbConnection()
  const user = new app.app.models.User()
  const userDAO = new app.app.models.UserDAO(connection)

  user.setUser(req.body.user)
  user.setPassword(req.body.password)
  userDAO.select(user)
    .then(result => {
      if (result.rows.length > 0) {
        req.session.authenticated = true
        req.session.user = result.rows[0]._user
        req.session.password = result.rows[0].password
        // res.render('home', { user: result.rows[0] })
        res.redirect('/home')
      } else {
        res.render('index', { 
          userNotExists: true,
          user: {
            user: user.getUser(),
            password: user.getPassword()
          }
        })
      }
    })
    .catch(err => {
      res.send('Error 500: Internal Server Error')
    })
}