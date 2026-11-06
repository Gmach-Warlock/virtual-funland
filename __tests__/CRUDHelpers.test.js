import { describe, it } from "node:test";
import assert from "node:assert";
import {
  addItemToArray,
  removeItemFromArray,
} from "../controller/CRUDHelpers.js";

describe("addItemToArray", () => {
  it("should early return undefined if the arr param is not of proper type or if the item is missing", () => {
    // arrange
    const badArr = "string";
    const goodArr = [1, 2, 3, 4];
    const item = 5;
    // act
    const result1 = addItemToArray(badArr, 5);
    const result2 = addItemToArray(goodArr);
    // assert
    assert.strictEqual(result1, undefined);
    assert.strictEqual(result2, undefined);
  });
  it("should return a new array with the item added to it and not mutate the original array", () => {
    // arrange
    const arr = [1, 2, 3, 4];
    const item = 5;
    // act
    const result = addItemToArray(arr, item);
    const expected = [1, 2, 3, 4, 5];
    // assert
    assert.deepStrictEqual(result, expected);
    assert.deepStrictEqual(arr, [1, 2, 3, 4]);
  });
});

describe("removeItemFromArray", () => {
  it("should early return undefined if the arr param is not of proper type or if the item is missing", () => {
    // arrange
    const badArr = "string";
    const goodArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    const item = { id: 5 };
    // act
    const result1 = removeItemFromArray(badArr, item);
    const result2 = removeItemFromArray(goodArr);
    // assert
    assert.strictEqual(result1, undefined);
    assert.strictEqual(result2, undefined);
  });
  it("should return a new array without the item and not mutate the original array", () => {
    // arrange
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const item = { id: 5 };
    // act
    const result = removeItemFromArray(arr, item);
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    // assert
    assert.deepStrictEqual(result, expected);
    assert.deepStrictEqual(arr, [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ]);
  });
});
