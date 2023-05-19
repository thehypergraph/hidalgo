import { assertEquals } from '../deps.ts'
import bubblesort from '../src/bubblesort.ts'

Deno.test('search a small array', () => {
  const arr = [5, 8, 2, 3, 4, 9, 10]
  const res = bubblesort(arr)
  console.log(res)
  assertEquals(res, [2, 3, 4, 5, 8, 9, 10])
})
