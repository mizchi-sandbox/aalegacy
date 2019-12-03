// import "../pre";
// import * as assert from "assert";
import flatten from "lodash-es/flatten";
import { ok } from "assert";
// import dep from "./dep";
// @ts-ignore
// import "promise-polyfill/dist/polyfill";
// import Promise from "promise-polyfill";

const p = Promise.resolve();
console.log(p, flatten([[1]]));

async function foo() {
  return 1;
}

it("x", async () => {
  const ret = await foo();
  // ok(ret === dep);
  // console.log(ret === dep);
  ok(ret === 1);
});
