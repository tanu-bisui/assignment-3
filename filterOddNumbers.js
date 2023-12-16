function filterOddNumbers(arr) {
    var oddNumbers = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }

    return oddNumbers;
}