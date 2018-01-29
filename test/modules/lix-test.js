const test = require('ava')
const lix = require('../../index')
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

test('it returns expected result', t => {
  t.is(lix(text), 18.79, 'score ok')
})

test('it returns 0 for no input', t => {
  t.is(lix(), 0, 'score ok - 0')
})

test('it returns 0 for infinity', t => {
  t.is(lix('CheezeBallz'), 0, 'infinity ok')
})
