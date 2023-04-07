module.exports = app => {
  app.get('/signup', (req, res) => {
    app.app.controllers.signup.signup(app, req, res)
  })
}