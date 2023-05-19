
class HttpError extends Error {
  constructor (statusCode, message, payload = null) {
    super(message)
    this.status = statusCode
    this.payload = payload
  }
}

module.exports = {
  HttpError
}
