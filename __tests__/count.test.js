const count = require('../utils/count');

test('counts 7757043040 to equal 10', () => {
  expect(count('7757043040')).toBe(10);
});

// test('counts mobile number to equal 9', () => {
//   expect(count('264817365371')).toBe(9);
// });
