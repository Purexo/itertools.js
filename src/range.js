function sanityze(start, stop, step) {
    if (start == undefined) { // range() -> range(0, 10, 1)
        start = 10;
    }
    if (stop == undefined) { // range(x) -> range(0, x, 1)
        stop = start;
        start = 0;
    }
    step = Math.abs(step);

    return [start, stop, step];
}

module.exports =
// export default
function* range(start = undefined, stop = undefined, step = 1) {
    [start, stop, step] = sanityze(start, stop, step);

    if (start < stop) {
        while (start < stop) {
            yield start;
            start += step;
        }
    }
    else if (start > stop) {
        while (start > stop) {
            yield start;
            start -= step;
        }
    }
    else {
        yield start;
    }
}