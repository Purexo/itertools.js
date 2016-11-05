const {count} = require('../');
const assert = require('assert');

describe('count Suite Tests', function () {
    it(`count() -> infinite generator [0, 1, 2, 3, 4, ...]`, function () {
        const test = count()
        let current = 0;

        while (current < 168) {
            assert.equal(current++, test.next().value)
        }
        assert.equal(false, test.next().done)
    });
    
    it(`count(0.5) -> infinite generator [0.5, 1.5, 2.5, 3.5, 4.5, ...]`, function () {
        const test = count(0.5)
        let current = 0.5;

        while (current < 136) {
            assert.equal(current++, test.next().value)
        }
        assert.equal(false, test.next().done)
    });
    
    it(`count(1.28, -5.23) -> infinite generator [1.28, 3.95, 9.18, 14.41, ...]`, function () {
        const test = count(1.28, -5.23)
        let current = 1.28;

        while (current > -136) {
            assert.equal(current, test.next().value)
            current -= 5.23
        }
        assert.equal(false, test.next().done)
    });
});