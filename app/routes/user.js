module.exports = app => {
  app.post('/user', (req, res) => {
    app.app.controllers.user.setUser(app, req, res)
  })

  app.delete('/user/:id', (req, res) => {
    app.app.controllers.user.deleteUser(app, req, res)
  })
}