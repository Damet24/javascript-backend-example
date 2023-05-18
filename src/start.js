const { Logger } = require('./core/Shared/infrastructure/Logger')
const { startServer } = require('./server')

function start () {
  startServer(3000)
    .catch(error => {
      Logger.error(error)
    })
}

start()
