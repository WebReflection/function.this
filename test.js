require('./');

const {map, sort} = Array.prototype;

const squared = n => n * 2;

console.assert(
  JSON.stringify(sort.this()(map.this(squared)([2, 3, 1]))) ===
  JSON.stringify([2, 3, 1].map(squared).sort()),
  'same result through different flow'
);
