const httpStatus = require('http-status')
const UseCase = require('../../../core/Note/application/GetNoteUseCase')
const Response = require('../../../core/Shared/infrastructure/Response')

async function run (_req, res, next) {
  try {
    const data = await UseCase.run()
    console.log('in controller', data)
    Response.success(res, data, httpStatus.OK)
  } catch (error) {
    next(error)
  }
}

module.exports = { run }
