module.exports =
    // export default
function* takewhile(predicate, iterable) {
    for (let x of iterable)  {
        if (predicate(x)) {
            yield x
        } else {
            break
        }
    }
}