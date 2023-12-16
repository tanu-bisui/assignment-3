function isPalindrome(str) {
    var lowerCaseStr = str.toLowerCase();

    var reversedStr = lowerCaseStr.split('').reverse().join('');

    return lowerCaseStr === reversedStr;
}