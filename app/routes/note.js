module.exports = app => {
  app.post('/note', (req, res) => {
    app.app.controllers.note.setNote(app, req, res)
  })

  app.get('/note/:id', (req, res) => {
    app.app.controllers.note.getNote(app, req, res)
  })
}