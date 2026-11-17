function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function sum(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

module.exports = {
  randomInt,
  clamp,
  sum,
  average
};
