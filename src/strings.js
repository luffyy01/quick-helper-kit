function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, len = 30, end = '...') {
  if (!str || typeof str !== 'string') return '';
  if (str.length <= len) return str;
  return str.slice(0, len - end.length) + end;
}

function slugify(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  capitalize,
  truncate,
  slugify
};
