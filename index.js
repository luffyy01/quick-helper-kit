const strings = require('./src/strings');
const arrays = require('./src/arrays');
const math = require('./src/math');
const misc = require('./src/misc');

module.exports = {
  ...strings,
  ...arrays,
  ...math,
  ...misc
};
