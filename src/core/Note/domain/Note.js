
class Note {
  constructor (id, description, content, priority) {
    if (id) this.id = id
    this.description = description
    this.content = content
    this.priority = priority
  }
}

module.exports = {
  Note
}
