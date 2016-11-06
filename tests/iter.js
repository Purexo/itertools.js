const {iter, range} = require('../');
const assert = require('assert');

describe('iter Suite Tests', function () {
    it(`iter('abc') -> finite iterator ['a', 'b', 'c']`, function () {
        const test = iter('abc')
        assert.equal('a', test.next().value)
        assert.equal('b', test.next().value)
        assert.equal('c', test.next().value)

        assert.equal(true, test.next().done)
    });
    
    it(`iter().next() -> throw TypeError (because iter should take an iterable or an iterator)`, function () {
        assert.throws(_ => iter().next(), TypeError)
    });
    
    it(`iter(range(5)) -> finite iterator [0, 1, 2, 3, 4]`, function () {
        const test = iter(range(5))

        for (let item of [0, 1, 2, 3, 4]) {
            assert.equal(item, test.next().value)
        }

        assert.equal(true, test.next().done)
    });
});