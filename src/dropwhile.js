const iter = require('./iter');

module.exports =
    // export default
function* dropwhile(predicate, iterable) {
    const it = iter(iterable)

    let shouldFilter = true
    for (let x of it)  {
        if (shouldFilter) {
            if (!predicate(x)) {
                yield x
                shouldFilter = !shouldFilter
            }
        } else {
            yield x
        }
    }
}