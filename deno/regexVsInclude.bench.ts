Deno.bench('regex', { group: 'in string' }, () => {
  const corpus = '10 - 3/8" ANSI Bolt- stainless steel - new item'
  const query = 'stainless steel'
  corpus.includes(query) ? -5 : 0
})

Deno.bench('include',  { group: 'in string' }, () => {
  const corpus = '10 - 3/8" ANSI Bolt- stainless steel - new item'
  const query = 'stainless steel'
  corpus.match(query) ? -5 : 0
})



