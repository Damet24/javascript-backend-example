const { connect, disconnect } = require('../../Shared/infrastructure/MongoDatabase')
const { Logger } = require('../../Shared/infrastructure/Logger')
const { deleteNote } = require('../infrastructure/NoteRepository')
const { z } = require('zod')
const { validate } = require('../../Shared/infrastructure/Validator')
const { HttpError } = require('../../Shared/domain/HttpError')

const validateSchema = z.object({
  id: z.string()
})

async function run (params) {
  validate(params, validateSchema)
  try {
    await connect()
    await deleteNote(params)
  } catch (error) {
    Logger.error('Error al eliminar usuarios', error)
    throw new HttpError()
  } finally {
    disconnect()
  }
}

module.exports = { run }
