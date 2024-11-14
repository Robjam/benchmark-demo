import { distance as fastestlevenshtein } from 'npm:fastest-levenshtein';
import { levenshteinDistance } from '../naiveLevenshtein.ts';

const corpus = 'CIショウヒン'
const query = 'ショウヒン'
Deno.bench('fastest-levenshtein', { group: 'fastest-levenshtein' }, () => {
  fastestlevenshtein(corpus, query)
})

Deno.bench('naivelevenshtein',  { group: 'fastest-levenshtein' }, () => {
  levenshteinDistance(corpus, query)
})
