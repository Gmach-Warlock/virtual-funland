import { describe, it } from "node:test";
import assert from "node:assert";
import { rng } from "../../controller/RNGHelpers.js";

describe("rng", () => {
  it("should return a number between 0 and 1 less than the number possible", () => {
    // arrange
    const numPossible = 5;
    // arrange
    const answer = rng(numPossible);
    const expected1 = answer >= 0;
    const expected2 = answer < numPossible;
    // assert
    assert.strictEqual(expected1, true);
    assert.strictEqual(expected2, true);
  });
});
