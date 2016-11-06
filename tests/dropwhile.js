const {dropwhile, range} = require('../');
const assert = require('assert');

describe('dropwhile Suite Tests', function () {
    it(`dropwhile(x => x < 5, range(10)) -> finite iterator [5, 6, 7, 8, 9]`, function () {
        const test = dropwhile(x => x < 5, range(10))

        for (let item of [5, 6, 7, 8, 9]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`dropwhile(x => x != 1337, [0, 52, 66, 1337, 1337, 555, 6] -> finite iterator [1337, 1337, 555, 6]`, function () {
        const test = dropwhile(x => x != 1337, [0, 52, 66, 1337, 1337, 555, 6])

        for (let item of [1337, 1337, 555, 6]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`dropwhile(x => x === false, [false, false, false]) -> finite iterator []`, function () {
        const test = dropwhile(x => x === false, [false, false, false])

        assert.equal(true, test.next().done)
    });
});