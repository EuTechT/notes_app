module.exports = app => {
  app.get('/', (req, res) => {
    app.app.controllers.index.index(app, req, res)
  })
  app.post('/login', (req, res) => {
    app.app.controllers.index.login(app, req, res)
  })
}