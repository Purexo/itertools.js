const {accumulate, range} = require('../');
const assert = require('assert');

describe('accumulate Suite Tests', function () {
    it(`accumulate('abc') -> finite generator ['a', 'ab', 'abc']`, function () {
        const test = accumulate('abc')
        assert.equal('a', test.next().value)
        assert.equal('ab', test.next().value)
        assert.equal('abc', test.next().value)

        assert.equal(true, test.next().done)
    });
    
    it(`accumulate() -> finite generator []`, function () {
        const test = accumulate()

        assert.equal(true, test.next().done)
    });
    
    it(`accumulate(range(1, 5)) -> finite generator [1, 3, 6, 10]`, function () {
        const test = accumulate(range(1, 5))

        for (let item of [1, 3, 6, 10]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
    
    it(`accumulate(range(1, 5), (a, b) => a * b) -> finite generator [1, 2, 6, 24]`, function () {
        const test = accumulate(range(1, 5), (a, b) => a * b)

        for (let item of [1, 2, 6, 24]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});