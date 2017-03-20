
# Bisect-Sorted-Set

An in memory sorted set that uses binary serach on numeric indexes to find values next to each other.

## Usage

```js
var Set = require('bisect-sorted-set')

var set = new Set()

set.put(1000, {foo: 'bar'})
set.put(100001, {foo: 'baz'})

set.get(1000) -> {foo: 'bar'}
set.get(1001) -> null
set.gte(1000) -> {foo: 'bar'}
set.gt(1000) -> {foo: 'baz'}
```

## Installation

```bash
$ npm install
```

## API

### #put(idx, value)

Store `value` at `idx`.

### #get(idx)

Get `value` at `idx`, if any.

### #gt(idx)

Get `value` with index next greater than `idx`, if any.

### #gte(idx)

Get `value` with index next greater than or equal to `idx`, if any.

### #lt(idx)

Get `value` with index next lower than `idx`, if any.

### #lte(id

Get `value` with index next lower than or equal to `idx`, if any.

### #del(idx)

Delete `value` at `idx`, if any.

## License

MIT
