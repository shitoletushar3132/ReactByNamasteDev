import { sum } from "../sum";

test("the test for sum function which gives a two sum of two numbers", () => {
  const total = sum(5, 5);

  expect(total).toBe(10);
});
