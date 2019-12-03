import { ok } from "assert";

async function foo() {
  return 1;
}

async function run() {
  const ret = await foo();
  ok(ret === 2);
}

run();
