import { describe, it } from "node:test";
import assert from "node:assert";
import { itemExists } from "../../controller/validation.js";
import { rl } from "../../view/menu.js";

describe("itemExists", () => {
  it("should return false if the item doesn't exist or if the params are bad", () => {
    // arrange
    const badArr = "wrong";
    const goodArr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const prop = "id";
    const value = 4;
    // act
    const result1 = itemExists(badArr, prop, value);
    const result2 = itemExists(goodArr, prop);
    const result3 = itemExists(goodArr, prop, value);
    // assert
    assert.strictEqual(result1, false);
    assert.strictEqual(result2, false);
    assert.strictEqual(result3, false);
  });
  it("should return true if an item with the id exists in the array", () => {
    // arrange
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const prop = "id";
    const value = 2;
    // act
    const result = itemExists(arr, prop, value);
    // assert
    assert.strictEqual(result, true);
  });
  rl.close();
});
