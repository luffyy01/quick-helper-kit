const test = require('node:test');
const assert = require('node:assert');
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
} = require('../index');

test('string helpers', () => {
  assert.strictEqual(capitalize('hello'), 'Hello');
  assert.strictEqual(capitalize(''), '');
  assert.strictEqual(truncate('short text', 20), 'short text');
  assert.strictEqual(truncate('this is a very long string', 10), 'this is...');
  assert.strictEqual(slugify('Hello World! 2026'), 'hello-world-2026');
});

test('array helpers', () => {
  const items = [1, 2, 3, 4, 5];
  const picked = pickRandom(items);
  assert.ok(items.includes(picked));
  assert.strictEqual(pickRandom([]), null);

  const shuf = shuffle(items);
  assert.strictEqual(shuf.length, 5);

  const chunks = chunk([1, 2, 3, 4, 5], 2);
  assert.deepStrictEqual(chunks, [[1, 2], [3, 4], [5]]);

  const duplicates = [1, 2, 2, 3, 3, 3, 4];
  assert.deepStrictEqual(unique(duplicates), [1, 2, 3, 4]);
});

test('math helpers', () => {
  const n = randomInt(5, 10);
  assert.ok(n >= 5 && n <= 10);

  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(5, 0, 10), 5);

  assert.strictEqual(sum([10, 20, 30]), 60);
  assert.strictEqual(average([10, 20, 30]), 20);
});

test('misc helpers', async () => {
  assert.strictEqual(isEmpty(''), true);
  assert.strictEqual(isEmpty([]), true);
  assert.strictEqual(isEmpty({}), true);
  assert.strictEqual(isEmpty('hi'), false);
  assert.strictEqual(isEmpty([1]), false);

  assert.strictEqual(formatBytes(0), '0 B');
  assert.strictEqual(formatBytes(1024), '1 KB');

  const start = Date.now();
  await sleep(50);
  const diff = Date.now() - start;
  assert.ok(diff >= 40);
});
