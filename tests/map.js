const {map} = require('../');
const assert = require('assert');

describe('map Suite Tests', function () {
    it(`map(Math.sqrt, [1, 4, 9, 16, 25]) -> finite generator [1, 2, 3, 4, 5]`, function () {
        const test = map(Math.sqrt, [1, 4, 9, 16, 25])

        for (let item of [1, 2, 3, 4, 5]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});