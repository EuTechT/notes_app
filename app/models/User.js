class User {
  constructor() {}

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }

  getUser() {
    return this.user
  }

  setUser(user) {
    this.user = user
  }

  getPassword() {
    return this.password
  }

  setPassword(password) {
    this.password = password
  }
}

module.exports = () => User