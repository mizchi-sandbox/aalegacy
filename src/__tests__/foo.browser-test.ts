import assert from "assert";
// import dep from "./dep";
// @ts-ignore
// import "promise-polyfill/dist/polyfill";
// import Promise from "promise-polyfill";

const p = Promise.resolve();
console.log(p);

async function foo() {
  return 1;
}

it("x", async () => {
  const ret = await foo();
  assert.ok(ret === 1);
});
