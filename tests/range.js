const {range} = require('../');

console.log(... range());
console.log(... range(5));
console.log(... range(-5));
console.log(... range(5, 10));
console.log(... range(10, 5));
console.log(... range(5, 10, -2));
console.log(... range(5, 10, 2));
console.log(... range(10, 5, -2));
console.log(... range(10, 5, 2));