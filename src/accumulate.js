const sum = (a, b) => a + b

module.exports =
    // export default
function* accumulate(iterable = [], callback = sum) {
    const it = iterable[Symbol.iterator] ?
        iterable[Symbol.iterator]() :
        typeof iterable.next == 'function' ?
            iterable :
            [][Symbol.iterator]();

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