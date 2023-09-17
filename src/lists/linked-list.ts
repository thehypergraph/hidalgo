interface Node<T> {
  next: Node<T> | null
}

class LinkedList<T> {
  private first: Node<T> | null = null
  private last: Node<T> | null = null

  append(node: Node<T>) {
    if (this.first?.next === null) {
      this.first.next = node
      return true
    }

    console.log(this.first)
    console.log(this.last)
    // cycle until the end.
  }
}

export default LinkedList
