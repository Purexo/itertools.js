const {islice, range} = require('../');

console.log(... islice(range(10), 10))
console.log(... islice(range(10), 20))
console.log(... islice(range(10), -5))
console.log(... islice(range(10), 1, 9))
console.log(... islice(range(10), 1, 9, 2))