import Stack from './stack'
import { expect, test } from 'bun:test'

test('stack push works', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.size()).toBe(3)
})

test('stack cap works', () => {
  const stack = new Stack<number>(2)
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.size()).toBe(2)
})

test('stack iterator works', () => {
  const stack = new Stack<string>(2)
  stack.push('ron')
  stack.push('jordan')
  stack.push('hey')

  let iterations = 0

  for (const _ of stack) {
    iterations++
  }

  expect(iterations).toBe(3)
})
