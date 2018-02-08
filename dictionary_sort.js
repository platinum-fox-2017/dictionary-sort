const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(arr) {
    // your code here
    for (var i = 0; i < arr.length; i++) {
        let reset = arr[i].toLowerCase()
        for (var j = i-1; j >= 0 && arr[j] > reset ; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = reset
    }
      return arr.join(',')
}

let arrOfWord = ['makan', 'DuDuk', 'tIdUr', 'Terbang']
let arrOfName = ['anggi', 'angga', 'ani', 'adi']

console.log(Dictionary(arrOfWord)); //duduk,makan,terbang,tidur
console.log(Dictionary(arrOfName)); //angga,anggi,adi,ani

module.exports = Dictionary
