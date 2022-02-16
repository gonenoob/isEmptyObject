const { expect } = require('@jest/globals')
const isEmptyObject = require('../index.js')

test('input null throw error', () => {
  expect(() => {
    isEmptyObject(null)
  }).toThrow()
})

test('input array throw error', () => {
  expect(() => {
    isEmptyObject([])
  }).toThrow()
})

test('input string throw error', () => {
  expect(() => {
    isEmptyObject('')
  }).toThrow()
})

test('input number throw error', () => {
  expect(() => {
    isEmptyObject(12)
  }).toThrow()
})

test('input undefined throw error', () => {
  expect(() => {
    isEmptyObject()
  }).toThrow()
})

test('{} be true', () => {
  expect(isEmptyObject({})).toBe(true)
})

test('{a: 1} be false', () => {
  expect(isEmptyObject({a: 1})).toBe(false)
})

test('{null: 1} be false', () => {
  expect(isEmptyObject({null: 1})).toBe(false)
})

test('{Symbol: 1} be false', () => {
  expect(isEmptyObject({[Symbol['a']]: 1})).toBe(false)
})
