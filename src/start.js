const { startServer } = require('./server')

function start () {
  startServer(3000)
    .then(() => {
      console.log('uwu')
    })
    .catch(() => {
      console.log('error')
    })
}

start()
