const {enumerate, range} = require('../');

for(let [index, value] of enumerate(new Set(["a", "b", "c", "b", "c", "d"]), 1)) {
    console.log(index, value);
}

for (let [index, value] of enumerate(range(10)))
    console.log(index, value)