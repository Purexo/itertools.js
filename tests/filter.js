const {filter, range} = require('../');
const assert = require('assert');

describe('filter Suite Tests', function () {
    it(`filter(x => x%2 == 0, range(10)) -> finite iterator [0, 2, 4, 6, 8]`, function () {
        const test = filter(x => x%2 == 0, range(10))

        for (let item of [0, 2, 4, 6, 8]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`filter(x => x >= 5, range(10)) -> finite iterator [5, 6, 7, 8, 9]`, function () {
        const test = filter(x => x >= 5, range(10))

        for (let item of [5, 6, 7, 8, 9]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});