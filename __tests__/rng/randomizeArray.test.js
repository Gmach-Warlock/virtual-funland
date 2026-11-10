import { describe, it } from "node:test";
import assert from "node:assert";
import { randomizeArray } from "../../controller/RNGHelpers.js";

describe("randomizeArray", () => {
  it("should create a copy of an array with the item orders randomized", () => {
    // arrange
    const itm1 = 1;
    const itm2 = 2;
    const itm3 = 3;
    const arr = [itm1, itm2, itm3];
    // act
    const answer = randomizeArray(arr);
    const expected1 = answer.some((item) => item === itm1);
    const expected2 = answer.some((item) => item === itm2);
    const expected3 = answer.some((item) => item === itm3);
    //
    assert.strictEqual(expected1, true);
    assert.strictEqual(expected2, true);
    assert.strictEqual(expected3, true);
    assert.strictEqual(answer.length, 3);
  });
});
