import { assertEquals } from '../deps.ts'

import linearSearch from '../src/linear-search.ts'

Deno.test('search for a string', () => {
  const stringData = ['a', 'b', 'c', 'd', 'e']
  const res = linearSearch(stringData, 'a')
  assertEquals(res, 'a')
})

Deno.test('search for a number', () => {
  const numData = [...Array(1000).keys()]
  const res = linearSearch(numData, 525)
  assertEquals(res, 525)
})

Deno.test('search a mixed array', () => {
  const mixedData = [2, 'hey', null, undefined, false, Symbol('wtf')]
  const res = linearSearch(mixedData, 'hey')
  assertEquals(res, 'hey')
})
