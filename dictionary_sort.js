const readline = require('readline');
// your code here to initialize the program and take user input

const dictionary_sort = (input) => {
    for (let i = 0; i < input.length; i++) {
        let min = input[i]
        for (let j = i + 1; j < input.length; j++) {
            if (input[j].toLowerCase() < min.toLowerCase()) {
                min = input[j]
                input[j] = input[i]
                input[i] = min
            }
        }
    }

    return input
}

let input1 = ['mAkan', 'DuDuk', 'tidur', 'teRbang']
let input2 = ['anggi', 'angga', 'ani', 'adi']
// module.exports = Dictionary
console.log(dictionary_sort(input1))
// duduk makan terbang tidur
console.log(dictionary_sort(input2))
// adi angga anggi ani