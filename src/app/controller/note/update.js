const httpStatus = require('http-status')
const UseCase = require('../../../core/Note/application/UpdateNoteUseCase')
const Response = require('../../../core/Shared/infrastructure/Response')

async function run (req, res, next) {
  try {
    const data = { ...req.params, data: req.body }
    await UseCase.run(data)
    Response.success(res, null, httpStatus.OK)
  } catch (error) {
    next(error)
  }
}

module.exports = { run }
