module.exports =
// export default
function* starmap(callback, iterable) {
    for (let args of iterable) {
        yield callback(...args)
    }
}