module.exports = app => {
  app.post('/user', (req, res) => {
    app.app.controllers.user.setUser(app, req, res)
  })
}