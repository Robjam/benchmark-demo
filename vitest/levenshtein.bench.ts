import { bench } from 'vitest'
import { distance as fastestlevenshtein } from 'fastest-levenshtein';
import { levenshteinDistance } from '../naiveLevenshtein.mjs';

const corpus = 'CIショウヒン'
const query = 'ショウヒン'
bench('fastest-levenshtein', () => {
  fastestlevenshtein(corpus, query)
})

bench('naivelevenshtein', () => {
  levenshteinDistance(corpus, query)
})
