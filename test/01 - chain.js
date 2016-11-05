const {chain} = require('../');
const assert = require('assert');

describe(`chain Suite Tests`, function () {
    it(`chain(
        "abc",
        ["e", "f", "g"],
        function*(){yield 1; yield 2; yield 3;}(),
        new Set([4,5,6])
    ) -> generator ["a", "b", "c", "e", "f", "g", 1, 2, 3, 4, 5, 6]`, function () {
        const test = chain(
            "abc",
            ["e", "f", "g"],
            function* () { yield 1; yield 2; yield 3; } (),
            new Set([4, 5, 6])
        )
        for (let value of ["a", "b", "c", "e", "f", "g", 1, 2, 3, 4, 5, 6]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it(`chain(
        ...new Map([["key", "value"], ["foo", "bar"]])
    ) -> generator ["key", "value", "foo", "bar"]`, function () {
        const test = chain(
            ...new Map([["key", "value"], ["foo", "bar"]])
        )
        for (let value of ["key", "value", "foo", "bar"]) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });

    it('chain() -> generator []', function () {
        const test = chain()
        for (let value of []) {
            assert.equal(value, test.next().value)
        }
        assert.equal(true, test.next().done)
    });
});