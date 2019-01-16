const add = require('./users')

describe('test users', () => {
  test('test get users',  () => {
    expect(add(1,3)).toBe(4);
  })
})