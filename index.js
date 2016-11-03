/*
import range from 'src/range';
import enumerate from 'src/enumerate';
import chain from 'src/chain';
import islice from 'src/islice';
import morceaux from 'src/morceaux';

export {range, enumerate, chain, islice, morceaux};
*/

Object.assign(exports, {
    range: require('./src/range'),
    enumerate: require('./src/enumerate'),
    chain: require('./src/chain'),
    islice: require('./src/islice'),
    morceaux: require('./src/morceaux')
})