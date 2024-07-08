const reduce = (nums, fun, init) => {

    if (nums.length > 0) {

       nums.forEach(num => init = fun(init, num));

        return init;

    } else {

        return init;

    }
}

const sum = (accum, curr) => {
    return accum + curr;
}

// const sum = (accum, curr) => accum + curr * curr

reduce([1,2,3,4], sum, 0);
