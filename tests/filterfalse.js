const {filterfalse, range} = require('../');
const assert = require('assert');

describe('filterfalse Suite Tests', function () {
    it(`filterfalse(x => x%2, range(10)) -> finite iterator [0, 2, 4, 6, 8]`, function () {
        const test = filterfalse(x => x%2, range(10))

        for (let item of [0, 2, 4, 6, 8]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`filterfalse(x => x > 5, range(10)) -> finite iterator [0, 1, 2, 3, 4, 5]`, function () {
        const test = filterfalse(x => x > 5, range(10))

        for (let item of [0, 1, 2, 3, 4, 5]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});