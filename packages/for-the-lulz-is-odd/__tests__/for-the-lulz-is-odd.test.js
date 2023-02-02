const { isOdd } = require("../dist/for-the-lulz-is-odd.js");

test("isOdd", () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
