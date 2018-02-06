// const readline = require('readline');

function sortDictionary(arrWords) {
    // return arrWords.sort()
    for (let i = 0; i < arrWords.length; i++) {
        let min = i;
        for (let j = i + 1; j < arrWords.length; j++) {
            if (arrWords[j].toLowerCase() < arrWords[min].toLowerCase()) {
                min = j
            }
        }
        let temp = arrWords[i]
        arrWords[i] = arrWords[min]
        arrWords[min] = temp
    }
    return arrWords
}


// let arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
let arrOfWord = ['anggi', 'Angga', 'Ani', 'adi'];
console.log(sortDictionary(arrOfWord));

// module.exports = Dictionary
