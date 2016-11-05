const {cycle} = require('../');
const assert = require('assert');

describe('cycle Suite Tests', function () {
    it(`cycle() -> stoped generator []`, function () {
        const test = cycle()
        assert.equal(true, test.next().done)
    });

    it(`cycle('abc') -> inifinite generator ['a', 'b', 'c', 'a', 'b', 'c', ...]`, function () {
        const test = cycle('abc')
        let start = 0;

        while(start++ < 100) {
            assert.equal('a', test.next().value)
            assert.equal('b', test.next().value)
            assert.equal('c', test.next().value)
        }

        assert.equal(false, test.next().done)
    });
});