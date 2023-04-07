module.exports.setUser = (app, req, res) => {
  const connection = app.config.dbConnection()
  const user = new app.app.models.User()
  const userDAO = new app.app.models.UserDAO(connection)

  user.setName(req.body.name)
  user.setUser(req.body.user)
  user.setPassword(req.body.password)

  userDAO.insert(user)
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      if (err.constraint === 'users__user_key') {
        res.render('signup', { 
          userExists: true,
          user: {
            name: user.getName(),
            user: user.getUser(),
            password: user.getPassword()
          }
        })
      } else {
        res.send('Error 500: Internal Server Error')
      }
    })
}