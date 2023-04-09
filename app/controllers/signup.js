module.exports.signup = (app, req, res) => {
  if (req.session.authenticated) {
    res.redirect('/home')
  } else {
    res.render('signup', { userExists: false, user: {} })
  }
}