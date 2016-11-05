/*
import range from 'src/range';
import count from 'src/count';
import cycle from 'src/cycle';
import enumerate from 'src/enumerate';
import chain from 'src/chain';
import islice from 'src/islice';
import morceaux from 'src/morceaux';

export {range, count, cycle, enumerate, chain, islice, morceaux};
*/

require('./methods.json').forEach(method => exports[method] = require(`./src/${method}`))