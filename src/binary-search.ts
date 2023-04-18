export function binarySearch<T>(data: T[], needle: T): T | null {
  for (const val of data) {
    if (val == needle) {
      return val
    }
  }

  return null
}
