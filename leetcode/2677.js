const chunk = (arr, size) => {

    const resultArray = [];

    for (let i = 0; i < arr.length; i += size) {
        resultArray.push(arr.slice(i, i + size));
    }

    console.log(resultArray);

    return resultArray;
}

chunk([1, 2, 3, 4, 5], 2);
