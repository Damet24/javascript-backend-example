const { startServer } = require("../src/server")

describe('Tests for Server', () => {
  test('should start the server', () => {
    expect(startServer())
  })
})
