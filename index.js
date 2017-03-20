var sorted = require('sorted-array-functions')

module.exports = Set

function Set () {
  if (!(this instanceof Set)) return new Set()
  this._list = []
  this._values = []
}

Set.prototype.put = function (idx, value) {
  this._values.push(value)
  sorted.add(this._list, idx)
}

Set.prototype.get = function (target) {
  var idx = sorted.eq(this._list, target)
  return this._values[idx]
}

Set.prototype.del = function (target) {
  var idx = sorted.eq(this._list, target)
  sorted.remove(this._list, idx)
  this._values[idx] = null
}

var methods = ['gt', 'gte', 'lt', 'lte']
methods.forEach(function (fn) {
  Set.prototype[fn] = function (target) {
    var idx = sorted[fn](this._list, target)
    return this._values[idx]
  }
})
