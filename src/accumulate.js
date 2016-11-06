// import range from 'range';

const iter = require('./iter')

const sum = (a, b) => a + b

module.exports =
    // export default
function* accumulate(iterable = [], callback = sum) {
    const it = iter(iterable)

    let next = it.next()
    if (next.done) {
        return
    }

    let total = next.value
    yield total

    next = it.next()
    while (!next.done) {
        total = callback(total, next.value)
        yield total
        next = it.next()
    }
}