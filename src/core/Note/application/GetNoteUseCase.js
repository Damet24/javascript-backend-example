const { connect, disconnect } = require('../../Shared/infrastructure/MongoDatabase')
const { Logger } = require('../../Shared/infrastructure/Logger')
const { getNotes } = require('../infrastructure/NoteRepository')
const { HttpError } = require('../../Shared/domain/HttpError')

async function run () {
  try {
    await connect()
    const notes = await getNotes()
    return notes
  } catch (error) {
    Logger.error('Error al obtener usuarios', error)
    throw new HttpError()
  } finally {
    disconnect()
  }
}

module.exports = { run }
