import { assertEquals } from '../deps.ts'
import binarySearch from '../src/binary-search.ts'

Deno.test('search a small array', () => {
  const haystack = [2, 5, 10, 25, 80, 100, 200, 500, 1000]
  const res = binarySearch(haystack, 1000)
  assertEquals(res, true)
})

Deno.test('search a large array', () => {
  const haystack = []

  for (let i = 0; i < 100000; i++) {
    haystack.push(i)
  }

  const res = binarySearch(haystack, 5689)
  assertEquals(res, true)
})
