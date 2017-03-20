var test = require('tape')
var Set = require('.')

test('integration', function (t) {
  var set = new Set()

  set.put(1000, { foo: 'bar' })
  set.put(100001, { foo: 'baz' })

  t.deepEqual(set.get(1000), { foo: 'bar' })
  t.notOk(set.get(1001))
  t.deepEqual(set.gte(1000), { foo: 'bar' })
  t.deepEqual(set.gt(1000), { foo: 'baz' })

  set.del(1000)
  t.notOk(set.get(1000))
  t.deepEqual(set.get(100001), { foo: 'baz' })

  t.end()
})
