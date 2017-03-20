var test = require('tape')
var Collection = require('.')

test('integration', function (t) {
  var collection = new Collection()

  collection.put(1000, { foo: 'bar' })
  collection.put(100001, { foo: 'baz' })

  t.deepEqual(collection.get(1000), { foo: 'bar' })
  t.notOk(collection.get(1001))
  t.deepEqual(collection.gte(1000), { foo: 'bar' })
  t.deepEqual(collection.gt(1000), { foo: 'baz' })

  collection.del(1000)
  t.notOk(collection.get(1000))

  t.end()
})
