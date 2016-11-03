// import chain from 'chain';
// import islice from 'islice';

const [chain, islice] = [require('./chain'), require('./islice')]

module.exports =
// export default
function* morceaux(iterable, taille) {
    /*
    const it = iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : iterable;
    let next = it.next();

    while (!next.done) {
        yield chain([next.value], islice(it, taille - 1));
        next = it.next();
    }
    */

    let cursor = 0;
    let array = []
    for (let item of iterable) {
        array.push(item);

        if (cursor < taille - 1) {
            cursor++;
        }
        else {
            yield [...array];
            array = [];
            cursor = 0;
        }
    }
    if (array.length > 0) {
        yield [...array] // prevent stoped iteration without yield
    }
}