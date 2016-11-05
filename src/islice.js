// import range from 'range';
// import enumerate from 'enumerate';

const [range, enumerate] = [require('./range'), require('./enumerate')];

function sanityze(start = undefined, stop = undefined, step = 1) {
    if (start == undefined && stop == undefined) {
        [start, stop] = [0, Number.MAX_SAFE_INTEGER]
    } // range() -> range(0, Number.MAX_SAFE_INTEGER)
    else if (start != undefined && stop == undefined) {
        [start, stop] = [0, start]
    } // range(x) -> range(0, x)

    if (start < 0 || stop < 0) {
        throw new RangeError(`Indices for islice() must be undefined or an integer: 0 <= start || stop <= Number.MAX_SAFE_INTEGER. (start = ${start}, stop = ${stop})`);
    }

    [start, stop] = [Math.min(start, stop), Math.max((start, stop))]
    step = Math.abs(step); // range(start, stop, |step|)

    return [start, stop, step];
}

module.exports =
    // export default
function* islice(iterable, start, stop, step) {
    [start, stop, step] = sanityze(start, stop, step);
    const it = range(start, stop, step);
    let next = it.next();

    for (let [i, element] of enumerate(iterable)) {
        if (i == next.value) {
            yield element;
            next = it.next();
        }
    }
}