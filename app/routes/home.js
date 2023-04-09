module.exports = app => {
  app.get('/home', (req, res) => {
    app.app.controllers.home.home(app, req, res)
  })

  app.get('/exit', (req, res) => {
    app.app.controllers.exit.exit(app, req, res)
  })
}