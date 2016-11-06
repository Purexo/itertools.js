// import chain from 'chain';
// import islice from 'islice';
// import islice from 'iter';

// const [chain, islice, iter] = [require('./chain'), require('./islice'), require('./iter')]

module.exports =
// export default
function* morceaux(iterable, taille) {
    /*
    const it = iter(iterable)
    let next = it.next()

    while (!next.done) {
        yield [...chain([next.value], islice(it, taille - 1))] // ne peux pas fonctionner, islice consomme tout l'itérable'
        next = it.next()
    }
    */

    let cursor, array

    function reset() {
        cursor = 0
        array = []
    } reset()
    
    for (let item of iterable) {
        array.push(item);

        if (cursor < taille - 1) {
            cursor++;
        }
        else {
            yield [...array];
            reset()
        }
    }
    if (array.length > 0) {
        yield [...array] // prevent stoped iteration without yield
    }
}