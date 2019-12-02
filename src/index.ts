// import assert from "assert";
// import dep from "./dep";
// @ts-ignore
// import "promise-polyfill/dist/polyfill";
// import Promise from "promise-polyfill";

async function foo() {
  return 1;
}

async function run() {
  const ret = await foo();
  console.log(ret);
  // assert.ok(ret === 1);
}

const p = Promise.resolve();

run();
