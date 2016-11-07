module.exports =
    // export default
function* filterfalse(predicate = x => !!x, iterable) {
    for (let item of iterable) {
        if (!predicate(item)) {
            yield item
        }
    }
}