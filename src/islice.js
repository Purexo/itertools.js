// import range from 'range';
// import enumerate from 'enumerate';

const [range, enumerate] = [require('./range'), require('./enumerate')];

function sanityze(start = undefined, stop = undefined, step = 1) {
    if (start == undefined && stop == undefined) {
        start = 0;
        stop = Number.MAX_SAFE_INTEGER;
    } // range() -> range(0, Number.MAX_SAFE_INTEGER)
    else if (start != undefined && stop == undefined) {
        stop = start;
        start = 0;
    } // range(x) -> range(0, x)
    step = Math.abs(step); // range(start, stop, |step|)
    
    [start, stop] = [Math.min(start, stop), Math.max((start, stop))]
    [start, stop] = [Math.abs(start), Math.abs(stop)]

    return [start, stop, step];
}

module.exports =
// export default
function* islice(iterable, ...rangeArgs) {
    const it = range(...sanityze(...rangeArgs));
    let next = it.next();

    for (let [i, element] of enumerate(iterable)) {
        if (i == next.value) {
            yield element;
            next = it.next();
        }
    }
}