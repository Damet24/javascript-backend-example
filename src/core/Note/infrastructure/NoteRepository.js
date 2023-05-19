const { ObjectId } = require('mongodb')
const { Logger } = require('../../Shared/infrastructure/Logger')
const { getDB } = require('../../Shared/infrastructure/MongoDatabase')
const { Note } = require('../domain/Note')

async function getNotes () {
  try {
    const database = getDB()
    const notes = await database.collection('notes').find().toArray()
    const mapedNotes = notes.map(note => {
      return new Note(note._id, note.description, note.content, note.priority)
    })
    return mapedNotes
  } catch (error) {
    Logger.error('Error al obtener usuarios', error)
    throw new Error('Error on get notes')
  }
}

async function createNote (note) {
  try {
    const database = getDB()
    await database.collection('notes').insertOne(note)
  } catch (error) {
    Logger.error('Error al obtener usuarios', error)
    throw new Error('Error on create note')
  }
}

async function updateNote (id, data) {
  try {
    const database = getDB()
    await database.collection('notes').updateOne({ _id: new ObjectId(id) }, data, { upsert: true })
  } catch (error) {
    Logger.error('Error al obtener usuarios', error)
    throw new Error('Error on update note')
  }
}

async function deleteNote (id) {
  try {
    const database = getDB()
    await database.collection('notes').deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    Logger.error('Error al obtener usuarios', error)
    throw new Error('Error on delete note')
  }
}

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote
}
