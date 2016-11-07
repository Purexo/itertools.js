module.exports =
// export default
function* map(callback, iterable) {
    for (let arg of iterable) {
        yield callback(arg)
    }
}