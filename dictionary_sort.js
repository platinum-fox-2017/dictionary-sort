const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(input) {
    // return arrOFWord.sort()
    for (let i = 0; i < input.length; i++) {
        let minimum = i
        for (let j = i + 1; j < input.length; j++) {
            if (input[j].toLowerCase() < input[minimum].toLowerCase()) {
                minimum = j
            }
        }
        let swap = input[i]
        input[i] = input[minimum]
        input[minimum] = swap
    }
    return input
}

var arrOFWord = ['MaKan','duDuK','Tidur','terBang']
var arrOFWord2 = ['anggi','Angga','Ani','adi']

console.log(dictionarySort(arrOFWord))
console.log(dictionarySort(arrOFWord2))