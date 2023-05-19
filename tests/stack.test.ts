import { assertEquals } from '../deps.ts'
import Stack from '../src/stack.ts'

Deno.test('stack push works', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(stack.size(), 3)
})

Deno.test('stack cap works', () => {
  const stack = new Stack<number>(2)
  stack.push(1)
  stack.push(2)
  stack.push(3)
  assertEquals(stack.size(), 2)
})

Deno.test('stack iterator works', () => {
  const stack = new Stack<string>(2)
  stack.push('ron')
  stack.push('jordan')
  stack.push('hey')

  let iterations = 0

  for (const _ of stack) {
    iterations++
  }

  assertEquals(iterations, 3)
})
