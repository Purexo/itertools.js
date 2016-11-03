module.exports =
// export default
function* enumerate(collection, start = 0) {
    for (let value of collection) {
        yield [start++, value];
    }
}