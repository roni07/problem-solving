const memoize = fn => {

    const cache = {};

    return (...args) => {

        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;

    }
}

let callCount = 0;
const memoizedFn = memoize((a, b) => {
    callCount += 1;
    return a + b;
});
memoizedFn(2, 2);
memoizedFn(2, 2);
