export default class Stack<T> {
  public items = new Array<T>()
  public cap?: number

  constructor(cap?: number) {
    this.cap = cap
  }

  push(item: T): boolean {
    if (this.items.length === this.cap) {
      return false
    }

    this.items.unshift(item)
    return true
  }

  pop(): T | undefined {
    return this.items.shift()
  }

  peek(): T | undefined {
    return this.items[0]
  }

  size(): number {
    return this.items.length
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  [Symbol.iterator]() {
    let index = 0

    return {
      next: () => {
        if (index <= this.items.length) {
          const res = { value: this.items[index], done: false }
          index = index + 1
          return res
        } else {
          return { value: null, done: true }
        }
      },
    }
  }
}
