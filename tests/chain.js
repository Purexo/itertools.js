const {chain} = require('../');

console.log(... chain("abc", ["e", "f", "g"], function*(){yield 1; yield 2; yield 3;}(), new Set([4,5,6])))
console.log(... chain(...new Map([["key", "value"], ["foo", "bar"]])))