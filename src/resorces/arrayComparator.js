export const compareArrays = (arr1, arr2) => {
    const arr1Sorted = arr1.sort(),
        arr2Sorted = arr2.sort();
    if (arr1Sorted.length === arr2Sorted.length) {
        for (let i = 0; i <= arr1Sorted.length; i++) {
            if (arr1Sorted[i] !== arr2Sorted[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};