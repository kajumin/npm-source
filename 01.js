const fp = require('lodash/fp')
const trace = fp.curry((tag, v) => {
  console.log(tag, v)
  return v
})
const f = fp.flowRight(
  fp.join('-'),
  trace('map 之后'),
  fp.map(fp.toLower),
  trace('split 之后'),
  fp.split(' ')
)
console.log(f('NEVER SAY DIE'))
