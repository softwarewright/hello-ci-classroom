const calc = require("./calculator");

describe("Calculator Tests", () => {
  [[1, 2, 3], [2, 2, 4], [4, 5, 9]].forEach(([a, b, result]) => {
    it(`should return the sum of two numbers ${a} + ${b} = ${result}`, () => {
      expect(calc.add(a, b)).toBe(result);
    });
  });
});
