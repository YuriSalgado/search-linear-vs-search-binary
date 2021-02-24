function binarySearch(array, element) {
    let start = 0;
    let end = array.length;
    let middle = Math.floor((start+end) / 2);
    while (array[middle] !== element && start <= end) {
        if (element < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start+end) / 2);
    }
    return array[middle] === element ? middle : -1;
}