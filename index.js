var sorted = require('sorted-array-functions')

module.exports = Set

function Set () {
  if (!(this instanceof Set)) return new Set()
  this._list = []
  this._values = {}
}

Set.prototype.put = function (idx, value) {
  this._values[idx] = value
  sorted.add(this._list, idx)
}

Set.prototype.get = function (idx) {
  return this._values[idx]
}

Set.prototype.del = function (idx) {
  sorted.remove(this._list, idx)
  delete this._values[idx]
}

var methods = ['gt', 'gte', 'lt', 'lte']
methods.forEach(function (fn) {
  Set.prototype[fn] = function (target) {
    var idx = sorted[fn](this._list, target)
    return this._values[this._list[idx]]
  }
})
