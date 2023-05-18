const httpStatus = require('http-status')

function success (res, data, status) {
  const statusCode = status ?? httpStatus.OK
  const payload = {
    error: null,
    body: data ?? httpStatus[200],
    status: statusCode
  }

  return res.status(statusCode).json(payload)
}

function error (res, error, data, status) {
  const statusCode = status ?? httpStatus.INTERNAL_SERVER_ERROR
  const payload = {
    error: error ?? httpStatus[500],
    body: data,
    status: statusCode
  }

  return res.status(statusCode).json(payload)
}

module.exports = {
  success,
  error
}
