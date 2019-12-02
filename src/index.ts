// import "./pre";
// @ts-ignore
import Promise from "promise-polyfill";

console.log(globalThis.Promise === Promise);

// console.log(Promise.resolve);

(async function() {
  await Promise.resolve();
  console.log("done");
})();
