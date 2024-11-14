
export function levenshteinDistance(s1: string, s2: string): number {
  // Convert strings to arrays to handle surrogate pairs
  const arr1 = Array.from(s1)
  const arr2 = Array.from(s2)

  const costs: number[] = new Array()
  for (let i = 0; i <= arr1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= arr2.length; j++) {
      if (i === 0) costs[j] = j
      else if (j > 0) {
        let newValue = costs[j - 1]
        if (arr1[i - 1] !== arr2[j - 1])
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[arr2.length] = lastValue
  }

  return costs[arr2.length]
}
