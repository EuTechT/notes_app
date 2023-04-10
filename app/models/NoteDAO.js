class NoteDAO {
  constructor(connection) {
    this._connection = connection
  }

  async insert(note) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`INSERT INTO notes(user_id, title, note, creation_timestamp, update_timestamp) VALUES (${note.getUserId()}, '${note.getTitle()}', '${note.getNote()}', '${note.getCreationTimestamp()}', '${note.getUpdateTimestamp()}')`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async selectAll(userId) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`SELECT * FROM notes WHERE user_id = ${userId} ORDER BY update_timestamp DESC`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async select(note) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`SELECT * FROM notes WHERE id = ${note.id}`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connectin...')
      this._connection.end()
    }
  }

  async deleteAll(note) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`DELETE FROM notes WHERE user_id = ${note.getUserId()}`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async delete(note) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`DELETE FROM notes WHERE id = ${note.getId()}`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }

  async update(note) {
    try {
      await this._connection.connect()
      const result = await this._connection.query(`UPDATE notes SET title = '${note.getTitle()}', note = '${note.getNote()}', update_timestamp = '${note.getUpdateTimestamp()}' WHERE id = ${note.getId()}`)

      return result
    } catch(err) {
      throw err
    } finally {
      console.log('Closing connection...')
      this._connection.end()
    }
  }
}

module.exports = () => NoteDAO