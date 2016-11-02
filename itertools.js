function * range(start = 0, stop = undefined, step = 1) {
  [start, stop] = [stop ? start : 0, stop || start];

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

function * enumerate(collection) {
	let i = 0;
	for (let value of collection) {
  	yield [i++, value];
  }
}

function * chain(...iterables) {
  for (iterable of iterables) {
    for (item of iterable) {
      yield item;
    }
  }
}

function * islice(iterable, ...args) {
  const it = range(...args)
  let nexti = it.next()

  for (let [i, element] of enumerate(iterable)) {
    if (i == nexti.value) {
      yield element;
      nexti = it.next();
    }
  }
}

function * morceau(iterable, taille) {
    const it = iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : iterable;
    let next = it.next();

    while (!next.done) {
      yield chain([next.value], islice(it, taille - 1));
      next = it.next();
    }
}

for (let [i, j] of enumerate(range(5, -10)))
	console.log(i, j);

console.log('----------------------')

for (let i of chain([1], [2, 3], [4]))
  console.log(i)

console.log('----------------------')

for (let i of islice(range(100), 0, 100, 10))
  console.log(i);

console.log('----------------------')

for (let [x, y, z] of morceau(range(1, 10), 3))
  console.log(x, y, z);
