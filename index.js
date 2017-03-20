var sorted = require('sorted-array-functions')

module.exports = Collection

function Collection () {
  if (!(this instanceof Collection)) return new Collection()
  this._list = []
  this._map = {}
}

Collection.prototype.put = function (idx, value) {
  this._map[this._list.length] = value
  sorted.add(this._list, idx)
}

Collection.prototype.get = function (target) {
  var idx = sorted.eq(this._list, target)
  return this._map[idx]
}

Collection.prototype.del = function (target) {
  var idx = sorted.eq(this._list, target)
  sorted.remove(this._list, idx)
  delete this._map[idx]
}

var methods = ['gt', 'gte', 'lt', 'lte']
methods.forEach(function (fn) {
  Collection.prototype[fn] = function (target) {
    var idx = sorted[fn](this._list, target)
    return this._map[idx]
  }
})
