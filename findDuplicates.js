function findDuplicates(arr) {
    var duplicates = [];

    var counts = {};

    for (var i = 0; i < arr.length; i++) {
        if (!counts[arr[i]]) {
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]]++;

            if (counts[arr[i]] === 2) {
                duplicates.push(arr[i]);
            }
        }
    }
	
    return duplicates;
}