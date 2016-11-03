const {morceaux, range, enumerate} = require('../');

for (let [x, y, z] of morceaux([1,2,3,4,5,6,7,8,9, 10], 3))
    console.log(x, y, z);
    
for (let [x, y, z] of morceaux(range(1, 11), 3))
    console.log(x, y, z);