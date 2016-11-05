module.exports =
// export default
function * count(start = 0, step = 1) {
    while (true) {
        yield start;
        start += step;
    }
}