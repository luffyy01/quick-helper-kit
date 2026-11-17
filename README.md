# quick-helper-kit

A lightweight collection of simple, everyday JavaScript helper functions designed for beginner students and quick scripting tasks.

## Installation

```bash
npm install quick-helper-kit
```

## Usage

```javascript
const {
  capitalize,
  truncate,
  slugify,
  pickRandom,
  shuffle,
  chunk,
  unique,
  randomInt,
  clamp,
  sum,
  average,
  isEmpty,
  sleep,
  formatBytes
} = require('quick-helper-kit');
```

### String Helpers

```javascript
capitalize('student'); // 'Student'
truncate('This is a longer piece of text', 15); // 'This is a lo...'
slugify('My First Project 2026!'); // 'my-first-project-2026'
```

### Array Helpers

```javascript
pickRandom(['apple', 'banana', 'orange']); // random element
shuffle([1, 2, 3, 4, 5]); // shuffled array
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
unique([1, 1, 2, 3, 3]); // [1, 2, 3]
```

### Math Helpers

```javascript
randomInt(1, 10); // integer between 1 and 10
clamp(15, 0, 10); // 10
sum([5, 10, 15]); // 30
average([10, 20, 30]); // 20
```

### General Helpers

```javascript
isEmpty([]); // true
isEmpty({}); // true
isEmpty('hello'); // false

formatBytes(1048576); // '1 MB'

await sleep(1000); // pause execution for 1 second
```

## Running Tests

```bash
npm test
```

## License

MIT
