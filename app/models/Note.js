class Note {
  constructor() {}

  getId() {
    return this.id
  }

  setId(id) {
    this.id = id
  }

  getUserId() {
    return this.userId
  }

  setUserId(userId) {
    this.userId = userId
  }

  getTitle() {
    return this.title
  }

  setTitle(title) {
    this.title = title
  }

  getNote() {
    return this.note
  }

  setNote(note) {
    this.note = note
  }

  getCreationTimestamp() {
    return this.creationTimestamp
  }

  setCreationTimestamp(creationTimestamp) {
    this.creationTimestamp = creationTimestamp
  }

  getUpdateTimestamp() {
    return this.updateTimestamp
  }

  setUpdateTimestamp(updateTimestamp) {
    this.updateTimestamp = updateTimestamp
  }
}

module.exports = () => Note