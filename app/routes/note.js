module.exports = function(app) {
  app.get('/note', (req, res) => {
    app.app.controllers.note.getNote(app, req, res)
  })

  app.post('/note', (req, res) => {
    app.app.controllers.note.setNote(app, req, res)
  })

  app.delete('/note', (req, res) => {
    app.app.controllers.note.deleteNote(app, req, res)
  })

  app.put('/note', (req, res) => {
    app.app.controllers.note.updateNote(app, req, res)
  })
}