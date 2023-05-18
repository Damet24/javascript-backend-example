const express = require('express')
const helmet = require('helmet')
const routes = require('./app/routes')

function startServer (port) {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.hidePoweredBy())
  app.use(helmet.frameguard({ action: 'deny' }))
  app.use('/api', routes)

  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log('server running on port', port)
      resolve()
    })
  })
}

module.exports = {
  startServer
}
