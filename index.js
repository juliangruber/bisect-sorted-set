var sorted = require('sorted-array-functions')

module.exports = Set

function Set () {
  if (!(this instanceof Set)) return new Set()
  this._list = []
}

Set.prototype.put = function (idx, value) {
  sorted.add(this._list, new Entry(idx, value), cmp)
}

Set.prototype.get = function (target) {
  var entry = new Entry(target, null)
  var idx = sorted.eq(this._list, entry, cmp)
  if (idx === -1) return
  return this._list[idx].value
}

Set.prototype.del = function (idx) {
  var entry = new Entry(idx, null)
  sorted.remove(this._list, entry, cmp)
}

var methods = ['gt', 'gte', 'lt', 'lte']
methods.forEach(function (fn) {
  Set.prototype[fn] = function (target) {
    var entry = new Entry(target, null)
    var idx = sorted[fn](this._list, entry, cmp)
    if (idx === -1) return
    return this._list[idx].value
  }
})

function cmp (a, b) {
  if (a.idx === b.idx) return 0
  return a.idx > b.idx ? 1 : -1
}

function Entry (idx, value) {
  this.idx = idx
  this.value = value
}
