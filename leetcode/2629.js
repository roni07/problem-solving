const compose = functions => {

    return (x) => {

        return functions.reduce((acc, fun) => fun(acc), x)

    }

}

const fn = compose([x => x + 1, x => 2 * x]);
fn(4);
