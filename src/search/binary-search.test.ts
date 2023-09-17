import binarySearch from './binary-search'
import { expect, test } from 'bun:test'

test('search a small array', () => {
  const haystack = [2, 5, 10, 25, 80, 100, 200, 500, 1000]
  const res = binarySearch(haystack, 1000)
  expect(res).toBe(true)
})

test('search a large array', () => {
  const haystack = []

  for (let i = 0; i < 100000; i++) {
    haystack.push(i)
  }

  const res = binarySearch(haystack, 5689)
  expect(res).toBe(true)
})
