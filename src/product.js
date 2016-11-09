module.exports =
    // export default
function* product(options) {
    // options = {args: [...args], repeat: 1}
    // options = ...args
    function * buildPools(args) {
        for (let pool of args) {
            yield [pool]
        }
    }

    let pools;
    if (arguments.length == 1 && options.hasOwnProperty('args')) {
        options.repeat = options.repeat || 1
        pools = [...repeat([...buildPools(options.args)], options.repeat)]
    }
    else {
        pools = [...buildPools(arguments)]
    }
    let result = [[]]

    for (let pool of pools) {
        for (let x of result) {
            for (let y of pool) {
                let list = [...x]
                list.push([y])
                result = [...list]
            }
        }
    }

    for (let prod of result) {
        yield [prod]
    }
}