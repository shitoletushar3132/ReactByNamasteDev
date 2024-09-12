import { sum } from "../sum";

test("sum function should calcualte the sum of two numbers", () => {
  const result = sum(3, 2);

  //assersion
  expect(result).toBe(7);
});
