const express = require('express')
const helmet = require('helmet')
const routes = require('./app/routes')
const { Logger } = require('./core/Shared/infrastructure/Logger')
const Responses = require('./core/Shared/infrastructure/Response')
const httpStatus = require('http-status')

function startServer (port) {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.hidePoweredBy())
  app.use(helmet.frameguard({ action: 'deny' }))
  app.use('/api', routes)

  app.use((error, _req, res, _next) => {
    Logger.error(error)
    const statusCode = error.status ?? httpStatus.INTERNAL_SERVER_ERROR
    const messageError = error.message ?? httpStatus[statusCode]
    Responses.error(res, messageError, error.payload, statusCode)
  })

  return new Promise((resolve) => {
    app.listen(port, () => {
      Logger.info(`Server running on port ${port}`)
      resolve()
    })
  })
}

module.exports = {
  startServer
}
