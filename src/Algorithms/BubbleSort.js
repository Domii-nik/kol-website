function bubbleSort(unsortedArray) {
    const n = unsortedArray.length;
    let sortedArray = [...unsortedArray];

    const response = {
        algorithm: 'Bubblesort',
        start: undefined,
        stop: undefined,
        duration: undefined, // stop - start
        sortedArray: [],
        unsortedArray: [],
    }
    response.unsortedArray = unsortedArray;
    response.start = Date.now();
    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < (n - i - 1); j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }
    response.sortedArray = sortedArray;
    response.stop = Date.now();
    response.duration = response.stop - response.start + 'ms';

    return response;
}

export {bubbleSort}
