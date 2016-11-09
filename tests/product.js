const {product} = require('../');
const assert = require('assert');

describe('product Suite Tests', function () {
    it(`product([1, 2, 3], ['a', 'b', 'c']) -> finite iterator [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]`, function () {
        const test = product([1, 2, 3], ['a', 'b', 'c'])
        const totest = [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]

        for (let [ox, oy] of totest) {
            let [tx, ty] = test.next().value
            assert.equal(ox, tx)
            assert.equal(oy, ty)
        }

        assert.equal(true, test.next().done)
    });
});