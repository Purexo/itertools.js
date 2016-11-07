const {takewhile, range} = require('../');
const assert = require('assert');

describe('takewhile Suite Tests', function () {
    it(`takewhile(x => x < 5, range(10)) -> finite iterator [0, 1, 2, 3, 4]`, function () {
        const test = takewhile(x => x < 5, range(10))

        for (let item of [0, 1, 2, 3, 4]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`takewhile(x => x < 1337, [0, 52, 66, 1337, 1337, 555, 6]) -> finite iterator [0, 52, 66]`, function () {
        const test = takewhile(x => x < 1337, [0, 52, 66, 1337, 1337, 555, 6])

        for (let item of [0, 52, 66]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`takewhile(x => x, [true, true, true, false, true, true, true]) -> finite iterator [true, true, true]`, function () {
        const test = takewhile(x => x, [true, true, true, false, true, true, true])

        for (let item of [true, true, true]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});