class UserDAO {
  constructor(connection) {
    this._connection = connection
  }

  async insert(user) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`INSERT INTO users(name, _user, password) VALUES ('${user.getName()}', '${user.getUser()}', '${user.getPassword()}')`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async select(user) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`SELECT * FROM users WHERE _user = '${user.getUser()}' and password = '${user.getPassword()}'`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async delete(user) {
    try {
      await this._connection.connect()

      const result = await this._connection.query(`DELETE FROM users WHERE id = ${user.getId()}`)
      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }
}

module.exports = () => UserDAO