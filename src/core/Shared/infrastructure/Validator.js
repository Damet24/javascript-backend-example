const httpStatus = require('http-status')
const { HttpError } = require('../domain/HttpError')

function validate (data, v) {
  const validated = v.safeParse(data)
  if (!validated.success) {
    const rawFormatErrors = validated.error.format()
    const formatedErrors = Object.entries(rawFormatErrors)
      .filter(i => !i[0].startsWith('_'))
      .map((item) => {
        const [key, value] = item
        return { [key]: value._errors }
      })

    const statusCode = httpStatus.BAD_REQUEST
    throw new HttpError(statusCode, httpStatus[statusCode], formatedErrors)
  }
}

module.exports = {
  validate
}
