const {starmap} = require('../');
const assert = require('assert');

describe('starmap Suite Tests', function () {
    it(`starmap(Math.pow, [[2,5], [3,2], [10,3]]) -> finite generator [32, 9, 1000]`, function () {
        const test = starmap(Math.pow, [[2,5], [3,2], [10,3]])

        for (let item of [32, 9, 1000]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});