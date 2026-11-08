import { describe, it } from "node:test";
import assert from "node:assert";
import { checkNumericInput } from "../../controller/general/validation.js";

describe("checkNumericInput", () => {
  it("should return false if the input isn't correct", () => {
    // arrange
    const blank = "";
    const notNumber = "doggy";
    const outOfRange = "6";
    const max = 5;
    // act
    const result1 = checkNumericInput(blank, max);
    const result2 = checkNumericInput(notNumber, max);
    const result3 = checkNumericInput(outOfRange, max);
    // assert
    assert.strictEqual(result1, false);
    assert.strictEqual(result2, false);
    assert.strictEqual(result3, false);
  });
  it("should return true if the param is good and within range", () => {
    // arrange
    const goodValue = "3";
    const max = 5;
    // act
    const result = checkNumericInput(goodValue, max);
    // assert
    assert.strictEqual(result, true);
  });
});
