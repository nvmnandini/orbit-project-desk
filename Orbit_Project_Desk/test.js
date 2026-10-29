
const fs = require("fs");
const assert = require("assert");

assert.ok(fs.existsSync("index.html"), "index.html is missing");
assert.ok(fs.existsSync("style.css"), "style.css is missing");
assert.ok(fs.existsSync("script.js"), "script.js is missing");

console.log("Tests Passed!");
