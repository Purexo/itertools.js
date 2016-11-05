const {range} = require('../');
const assert = require('assert');

describe('range Suite Tests', function () {
    it(`range() -> generator [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`, function () {
        const test = range()
        for (let value of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });
    
    it('range(5) -> generator [0, 1, 2, 3, 4]', function () {
        const test = range(5)
        for (let value of [0, 1, 2, 3, 4]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(-5) -> generator [0, -1, -2, -3, -4]', function () {
        const test = range(-5)
        for (let value of [0, -1, -2, -3, -4]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(5, 10) -> generator [5, 6, 7, 8, 9]', function () {
        const test = range(5, 10)
        for (let value of [5, 6, 7, 8, 9]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(10, 5) -> generator [10, 9, 8, 7, 6]', function () {
        const test = range(10, 5)
        for (let value of [10, 9, 8, 7, 6]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(5, 10, -2) -> generator [5, 7, 9]', function () {
        const test = range(5, 10, -2)
        for (let value of [5, 7, 9]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(5, 10, 2) -> generator [5, 7, 9]', function () {
        const test = range(5, 10, 2)
        for (let value of [5, 7, 9]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('range(10, 5, -2) -> generator [10, 8, 6]', function () {
        const test = range(10, 5, -2)
        for (let value of [10, 8, 6]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });
    
    it('range(10, 5, 2) -> generator [10, 8, 6]', function () {
        const test = range(10, 5, 2)
        for (let value of [10, 8, 6]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });
});