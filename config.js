const dotenv = require('dotenv')
const path = require('node:path')

const envPath = path.join(__dirname, `.env.${process.env.NODE_ENV}`)
dotenv.config({ path: envPath })

module.exports = {
  api: {
    port: process.env.PORT ?? '3000'
  },
  mongo: {
    db: process.env.MONGO_DB_NAME ?? 'notes',
    user: process.env.MONGO_USER ?? 'admin',
    password: process.env.MONGO_PASSWARD ?? 'pass123'
  }
}
