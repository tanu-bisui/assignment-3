function findMaxNumber(arr) {
    var maxNumber = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}