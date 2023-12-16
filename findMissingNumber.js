function findMissingNumber(arr) {
    var n = arr.length + 1;

    var expectedSum = (n * (n + 1)) / 2;

    var actualSum = sumArray(arr);

    return expectedSum - actualSum;
}