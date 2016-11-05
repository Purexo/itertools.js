const {islice, range} = require('../');
const assert = require('assert');

describe('islice Suite Tests', function () {
    it(`islice(range(5), 5) -> generator [0, 1, 2, 3, 4]`, function () {
        const test = islice(range(5), 5)
        for (let value of [0, 1, 2, 3, 4]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it(`islice(range(5), 10) -> generator [0, 1, 2, 3, 4]`, function () {
        const test = islice(range(5), 10)
        for (let value of [0, 1, 2, 3, 4]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it(`islice(range(5), -3).next() throws RangeError`, function () {
        assert.throws(_ => islice(range(10), -3).next(), RangeError)
    });

    it(`islice(range(10), 1, 9) -> generator [1, 2, 3, 4, 5, 6, 7, 8]`, function () {
        const test = islice(range(10), 1, 9)
        for (let value of [1, 2, 3, 4, 5, 6, 7, 8]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it(`islice(range(10), 1, 9, 2) -> generator [1, 3, 5, 7]`, function () {
        const test = islice(range(10), 1, 9, 2)
        for (let value of [1, 3, 5, 7]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });
});