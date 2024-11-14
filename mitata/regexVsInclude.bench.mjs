import { bench, run } from 'mitata'
const corpus = '10 - 3/8" ANSI Bolt- stainless steel - new item'
const query = 'stainless steel'

bench('regex', () => {
  corpus.match(query) ? -5 : 0
})

bench('include', () => {
  corpus.includes(query) ? -5 : 0
})

await run()
