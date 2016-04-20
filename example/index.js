"use strict";

const functionName = require("../lib");

function foo () {}

console.log(functionName(foo));
// => foo
