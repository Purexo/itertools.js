const repeat = require('./repeat');

module.exports =
    // export default
function* product(options) {
    // product({args: [...args], repeat: 1})
    // product(...args)

    let pool;
    if (arguments.length == 1 && options.hasOwnProperty('args')) {
        options.repeat = options.repeat || 1
        pool = [...repeat([...options.args], options.repeat)]
    }
    else {
        pool = [...arguments]
    }
    let isString = true
    for (let item of pool) {
        if (typeof item != 'string') {
            isString = false
            break
        }
    }

    // thx to heenenee : http://stackoverflow.com/a/39112625
    function* doCartesian(i, prod) {
        if (i == pool.length) {
            yield prod;
        } else {
            for (let j = 0; j < pool[i].length; j++) {
                yield* doCartesian(i + 1, prod.concat([pool[i][j]]));
            }
        }
    }
    function* doCartesianString(i, prod) {
        if (i == pool.length) {
            yield prod;
        } else {
            for (let j = 0; j < pool[i].length; j++) {
                yield* doCartesian(i + 1, prod.concat(pool[i][j]));
            }
        }
    }
    yield* isString ? doCartesianString(0, '') : doCartesian(0, []);
}