const {product, range} = require('../');
const assert = require('assert');

describe('product Suite Tests', function () {
    it(`product([1, 2, 3], ['a', 'b', 'c']) -> finite iterator [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]`, function () {
        const test = product([1, 2, 3], ['a', 'b', 'c'])
        const totest = [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c'], [3, 'a'], [3, 'b'], [3, 'c']]

        for (let [ox, oy] of totest) {
            let [tx, ty] = test.next().value
            assert.equal(ox, tx)
            assert.equal(oy, ty)
        }

        assert.equal(true, test.next().done)
    });

    it(`product('ABCD', 'xy') -> finite iterator ['Ax', 'Ay', 'Bx', 'By', 'Cx', 'Cy', 'Dx', 'Dy']`, function () {
        const test = product('ABCD', 'xy')
        const totest = ['Ax', 'Ay', 'Bx', 'By', 'Cx', 'Cy', 'Dx', 'Dy']

        for (let string of totest) {
            assert.equal(string, test.next().value)
        }

        assert.equal(true, test.next().done)
    });

    it(`product({args: [range(2)], repeat: 3}) -> finite iterator [[0,0,0], [0,0,1], [0,1,0], [0,1,1], [1,0,0], [1,0,1], [1,1,0], [1,1,1]]`, function () {
        const test = product({args: range(2), repeat: 3})
        const totest = [[0,0,0], [0,0,1], [0,1,0], [0,1,1], [1,0,0], [1,0,1], [1,1,0], [1,1,1]]

        for (let [a,b,c] of totest) {
            let [x,y,z] = test.next().value
            console.log(x,y,z)
            assert.equal(a, x)
            assert.equal(b, y)
            assert.equal(c, z)
        }

        assert.equal(true, test.next().done)
    });
});