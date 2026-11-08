import { describe, it } from "node:test";
import assert from "node:assert";
import { checkStringInput } from "../../controller/general/validation.js";

describe("checkStringInput", () => {
  it("should return false if the param is bad", () => {
    // arrange
    const blank = "";
    const hack = "I<h1>Hack</>";
    const numString = "48";
    const numGuardBool = true;
    // act
    const result1 = checkStringInput(blank, numGuardBool);
    const result2 = checkStringInput(hack, numGuardBool);
    const result3 = checkStringInput(numString, numGuardBool);
    // assert
    assert.strictEqual(result1, false);
    assert.strictEqual(result2, false);
    assert.strictEqual(result3, false);
  });
  it("should return true if the string is valid", () => {
    // arrange
    const good = "goodBoy";
    const numBool = true;
    // act
    const result = checkStringInput(good, numBool);
    // assert
    assert.strictEqual(result, true);
  });
});
