import bubblesort from './bubblesort'
import { expect, test } from 'bun:test'

test('search a small array', () => {
  const arr = [5, 8, 2, 3, 4, 9, 10]
  const res = bubblesort(arr)

  expect(res[0]).toBe(2)
  expect(res[1]).toBe(3)
  expect(res[2]).toBe(4)
  expect(res[3]).toBe(5)
  expect(res[4]).toBe(8)
  expect(res[5]).toBe(9)
  expect(res[6]).toBe(10)
})
