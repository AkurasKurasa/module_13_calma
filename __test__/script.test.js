// __test__/script.test.js
const { addNumbers } = require('../script');

test('adds numbers correctly', () => {
  expect(addNumbers(2, 3)).toBe(5); // ✅ passes
});

// test('fails intentionally', () => {
//   expect(addNumbers(2, 2)).toBe(5); // ❌ fails on purpose
// });
