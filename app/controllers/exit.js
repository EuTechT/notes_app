module.exports.exit = (app, req, res) => {
  req.session.destroy(err => {
    res.redirect('/')
  })
}