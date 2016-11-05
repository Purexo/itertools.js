const {morceaux, range, enumerate} = require('../');
const assert = require('assert');

describe('morceaux Suite Tests', function () {
    it(`morceaux([1,2,3,4,5,6,7,8,9, 10], 3) -> generator [[1,2,3], [4,5,6], [7,8,9], [10, undefined, undefined]]`, function () {
        const test = morceaux([1,2,3,4,5,6,7,8,9, 10], 3)
        for (let [x, y, z] of [[1,2,3], [4,5,6], [7,8,9], [10, undefined, undefined]]) {
            let [mx, my, mz] = test.next().value
            assert.equal(x, mx)
            assert.equal(y, my)
            assert.equal(z, mz)
        }
        assert.equal(true, test.next().done)
    });

    it(`morceaux(range(1, 10), 3) -> generator [[1,2,3], [4,5,6], [7,8,9]]`, function () {
        const test = morceaux(range(1, 10), 3)
        for (let [x, y, z] of [[1,2,3], [4,5,6], [7,8,9]]) {
            let [mx, my, mz] = test.next().value
            assert.equal(x, mx)
            assert.equal(y, my)
            assert.equal(z, mz)
        }
        assert.equal(true, test.next().done)
    });
});