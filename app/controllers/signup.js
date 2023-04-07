module.exports.signup = (app, req, res) => {
  res.render('signup', { userExists: false, user: {} })
}