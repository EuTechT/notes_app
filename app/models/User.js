class User {
  constructor() {}

  getId() {
    return this.id
  }

  setId(id) {
    this.id = id
  }

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