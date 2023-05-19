const { createLogger, format, transports } = require('winston')

const Levels = {
  DEBUG: 'debug',
  ERROR: 'error',
  INFO: 'info'
}

const Logger = createLogger({
  format: format.combine(format.simple()),
  transports: [
    new transports.File({ filename: `logs/${Levels.DEBUG}.log`, level: Levels.DEBUG }),
    new transports.File({ filename: `logs/${Levels.ERROR}.log`, level: Levels.ERROR }),
    new transports.File({ filename: `logs/${Levels.INFO}.log`, level: Levels.INFO }),
    new transports.Console()
  ]
})

module.exports = {
  Logger
}
