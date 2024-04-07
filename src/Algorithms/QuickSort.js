function quickSort(unsortedArray) {
    const response = {
        algorithm: 'Quicksort',
        start: undefined,
        stop: undefined,
        duration: undefined, // stop - start
        sortedArray: [],
        unsortedArray: [],
    }
    response.unsortedArray = unsortedArray;
    response.start = Date.now();

    function sort(array) {

        if (array.length <= 1) {
            return array;
        }

        const pivot = array[0];
        const leftArray = [];
        const rightArray = [];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }

        return [...sort(leftArray), pivot, ...sort(rightArray)];
    }

    response.sortedArray = sort(unsortedArray);
    response.stop = Date.now();
    response.duration = response.stop - response.start + 'ms';

    return response;
}

export {quickSort}