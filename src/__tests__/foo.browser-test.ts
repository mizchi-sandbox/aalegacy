import assert from "assert";
import dep from "./dep";
// @ts-ignore
import Promise from "promise-polyfill";

describe("xxx", () => {
  it("x", async () => {
    await Promise.resolve(1);
    assert.ok(dep === 1);
  });
});
