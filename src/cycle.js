module.exports =
// export default
function* cycle(iterable = []) {
    const saved = [];

    for (let item of iterable) {
        yield item
        saved.push(item)
    }

    while (saved.length > 0) {
        for (let item of saved) {
            yield item
        }
    }
}