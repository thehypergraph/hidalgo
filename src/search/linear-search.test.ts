import linearSearch from './linear-search'
import { expect, test } from 'bun:test'

test('search for a string', () => {
  const stringData = ['a', 'b', 'c', 'd', 'e']
  const res = linearSearch(stringData, 'a')
  expect(res).toBe('a')
})

test('search for a number', () => {
  const numData = [...Array(1000).keys()]
  const res = linearSearch(numData, 525)
  expect(res).toBe(525)
})

test('search a mixed array', () => {
  const mixedData = [2, 'hey', null, undefined, false, Symbol('wtf')]
  const res = linearSearch(mixedData, 'hey')
  expect(res).toBe('hey')
})
