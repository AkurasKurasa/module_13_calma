const { addNumbers } = require('../script.js');

test('adds numbers correctly', () => {
  expect(addNumbers(2, 3)).toBe(5); // ✅ passing test
});

test('fails intentionally', () => {
  expect(addNumbers(2, 2)).toBe(5); // ❌ failing test (for demo)
});
