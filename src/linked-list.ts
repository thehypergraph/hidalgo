class Node<T> {
  next: Node<T> | null = null
  constructor(public data: number) {}
}

class LinkedList<T> {
  head: Node<T> | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = node
  }

  get length(): number {
    let length = 0
    let node = this.head
    while (node) {
      length++
      node = node.next
    }
    return length
  }

  at(index: number): Node<T> {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    let counter = 0
    let node: Node<T> | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    throw new Error('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) {
      throw new Error('List is empty')
    }

    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node<T> | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}

export default LinkedList
