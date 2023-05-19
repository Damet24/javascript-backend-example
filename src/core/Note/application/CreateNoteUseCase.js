const { connect, disconnect } = require('../../Shared/infrastructure/MongoDatabase')
const { Logger } = require('../../Shared/infrastructure/Logger')
const { createNote } = require('../infrastructure/NoteRepository')
const { z } = require('zod')
const { validate } = require('../../Shared/infrastructure/Validator')
const { HttpError } = require('../../Shared/domain/HttpError')

const validateSchema = z.object({
  description: z.string(),
  content: z.string(),
  priority: z.number().min(0)
})

async function run (params) {
  validate(params, validateSchema)
  try {
    await connect()
    await createNote(params)
  } catch (error) {
    Logger.error('Error al obteneo usuarios', error)
    throw new HttpError()
  } finally {
    disconnect()
  }
}

module.exports = { run }
