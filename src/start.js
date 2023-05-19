const config = require('../config')
const { Logger } = require('./core/Shared/infrastructure/Logger')
const { startServer } = require('./server')

function start () {
  startServer(config.api.port)
    .catch(error => {
      Logger.error(error)
    })
}

start()
