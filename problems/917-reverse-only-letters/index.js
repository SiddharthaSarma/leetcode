var reverseOnlyLetters = function(S) {
    var chars = S.split('');
    var i = 0;
    var j = S.length;
    var isChar = () => S.toLowerCase() !== S.toUpperCase();
    while (i < j) {
        while (i < j && !isChar(S[i])) {
            i++;
        }
        while (i < j && !isChar(S[j])) {
            j--;
        }
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        i++;
        j--;
    }
    return chars.join('')
};
