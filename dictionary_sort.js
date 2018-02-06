function sameFirstAlphabet(word1, word2) {
    for(var i = 1; i < word1.length; i++) {
        if (word1[i] < word2[i]) {
            return word1;
        } else if (word1[i] > word2[i]) {
            return word2;
        }
    }
    return word1;
}

function dictionarySort(arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = 0; j < i; j++) {
            if (arr[i][0] < arr[j][0]) {
                var temp = arr[j];
                arr[j]   = arr[i];
                arr[i]   = temp;
            } else if (arr[i][0] == arr[j][0]) {
                var winner = sameFirstAlphabet(arr[i],arr[j]);
                if (winner == arr[i]) {
                    var temp = arr[j];
                    arr[j]   = arr[i];
                    arr[i]   = temp;
                } 
            }
        }
    }
    return arr;
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi'];

console.log(dictionarySort(arrOfWord));
console.log(dictionarySort(arrOfWord2));