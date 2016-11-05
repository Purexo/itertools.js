const {enumerate, range} = require('../');
const assert = require('assert');

describe('enumerate Suite Tests', function () {
    it(`enumerate(range(5)) -> generator [[0,0], [1,1], [2,2], [3,3], [4,4]]`, function () {
        const test = enumerate(range(5))
        for (let [index, value] of [[0,0], [1,1], [2,2], [3,3], [4,4]]) {
            const [eindex, evalue] = test.next().value;
            assert.equal(index, eindex)
            assert.equal(value, evalue)
        }
        assert.equal(true, test.next().done)
    });
    it(`enumerate(new Set(["a", "b", "c", "b", "c", "d"]), 1) -> generator [[1,'a'], [2,'b'], [3,'c'], [4,'d']]`, function () {
        const test = enumerate(new Set(["a", "b", "c", "b", "c", "d"]), 1)
        for (let [index, value] of [[1,'a'], [2,'b'], [3,'c'], [4,'d']]) {
            const [eindex, evalue] = test.next().value;
            assert.equal(index, eindex)
            assert.equal(value, evalue)
        }
        assert.equal(true, test.next().done)
    });
});