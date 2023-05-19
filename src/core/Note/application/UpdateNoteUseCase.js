const { connect, disconnect } = require('../../Shared/infrastructure/MongoDatabase')
const { Logger } = require('../../Shared/infrastructure/Logger')
const { updateNote } = require('../infrastructure/NoteRepository')
const { z } = require('zod')
const { validate } = require('../../Shared/infrastructure/Validator')
const { HttpError } = require('../../Shared/domain/HttpError')

const validateSchema = z.object({
  id: z.string(),
  data: z.object({
    description: z.string().optional(),
    content: z.string().optional(),
    priority: z.number().optional()
  })
})

async function run (params) {
  validate(params, validateSchema)
  try {
    await connect()
    await updateNote(params.id, params.data)
  } catch (error) {
    Logger.error('Error al eliminar usuarios', error)
    throw new HttpError()
  } finally {
    disconnect()
  }
}

module.exports = { run }
