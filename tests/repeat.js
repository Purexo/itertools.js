const {repeat} = require('../');
const assert = require('assert');

describe('repeat Suite Tests', function () {
    it(`repeat('a') -> infinite generator ['a', 'a', 'a', ...]`, function () {
        const test = repeat('a')
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)

        assert.equal(false, test.next().done)
    });

    it(`repeat('a', 5) -> finite generator ['a', 'a', 'a', 'a', 'a']`, function () {
        const test = repeat('a', 5)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)
        assert.equal('a', test.next().value)

        assert.equal(true, test.next().done)
    });
});