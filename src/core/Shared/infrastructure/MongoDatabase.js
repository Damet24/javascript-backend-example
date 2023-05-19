const { MongoClient } = require('mongodb')
const { Logger } = require('./Logger')
const config = require('../../../../config')

const uri = `mongodb://${config.mongo.user}:${config.mongo.password}@localhost:27017`

const options = {
  maxPoolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const client = new MongoClient(uri, options)

async function connect () {
  try {
    await client.connect()
    Logger.info('Conectado al servidor de MongoDB')
  } catch (error) {
    Logger.error('Error al conectar a MongoDB', error)
  }
}

function getDB () {
  return client.db()
}

async function disconnect () {
  try {
    await client.close()
    Logger.info('Desconectado del servidor de MongoDB')
  } catch (error) {
    Logger.error('Error al desconectar de MongoDB', error)
  }
}

module.exports = { connect, getDB, disconnect }
