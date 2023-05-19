const httpStatus = require('http-status')
const UseCase = require('../../../core/Note/application/DeleteNoteUseCase')
const Response = require('../../../core/Shared/infrastructure/Response')

async function run (req, res, next) {
  try {
    await UseCase.run(req.params)
    Response.success(res, null, httpStatus.CREATED)
  } catch (error) {
    next(error)
  }
}

module.exports = { run }
