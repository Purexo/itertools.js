const range = require('./range');

module.exports =
    // export default
function* repeat(item, times = undefined) {
    if (times == undefined) {
        while (true) {
            yield item
        }
    }
    else {
        for (let i of range(times)) {
            yield item;
        }
    }
}