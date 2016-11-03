module.exports =
// export default
function* chain(...iterables) {
    for (iterable of iterables) {
        for (item of iterable) {
            yield item;
        }
    }
}