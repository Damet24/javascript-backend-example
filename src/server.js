const express = require('express')
const helmet = require('helmet')
const routes = require('./app/routes')
const { Logger } = require('./core/Shared/infrastructure/Logger')
const Response = require('./core/Shared/infrastructure/Response')

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
    Response.error(res, error, null, error.status)
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
