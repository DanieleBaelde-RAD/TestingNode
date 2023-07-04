import assert from "node:assert";
import { describe, it } from "node:test";

import * as fn from "../index.ts";

describe("Add Two Numbers", () => {
  it("should work and return a number", () => {
    assert.strictEqual(fn.addTwoNumbers(1, 0), 1);
    assert.strictEqual(fn.addTwoNumbers(1, 1), 2);
    assert.strictEqual(fn.addTwoNumbers(1, 2), 3);
    assert.strictEqual(fn.addTwoNumbers(2, 2), 4);
    assert.strictEqual(fn.addTwoNumbers(3, 2), 5);
    assert.strictEqual(fn.addTwoNumbers(5, 5), 10);
  });
});

describe("Calculate days between dates", () => {
  it("should return an integer", () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-01-15");

    const result = fn.calculateDaysBetweenDates(startDate, endDate);

    assert.strictEqual(Number.isInteger(result), true);
  });
  it("should return 14 for 2023-01-01 and 2023-01-15", () => {
    const startDate = new Date("2023-01-01");
    const endDate = new Date("2023-01-15");

    const result = fn.calculateDaysBetweenDates(startDate, endDate);

    assert.strictEqual(result, 14);
  });
});
