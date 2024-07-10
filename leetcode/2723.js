const addTwoPromises = async (promise1, promise2) => {
    try {

        const [a, b] = await Promise.all([promise1, promise2]);
        return a + b;

    } catch (error) {
        return error;
    }
};

addTwoPromises(
    Promise.resolve(2),
    Promise.resolve(2))
    .then(console.log); // 4
