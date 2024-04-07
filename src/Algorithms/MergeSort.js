function mergeSort(unsortedArray) {
    const response = {
        algorithm: 'Mergesort',
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

        // Aufspaltung in zwei Hälften
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);

        // Sortieren beider Hälften
        const leftSorted = sort(left);
        const rightSorted = sort(right);

        return merge(leftSorted, rightSorted);
    }

    response.sortedArray = sort(unsortedArray);
    response.stop = Date.now();
    response.duration = response.stop - response.start + 'ms';

    return response;
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Vegleichen und zusammenfügen
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }


    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

export {mergeSort}