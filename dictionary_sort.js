const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(arrName) {
  for (var i = 0; i < arrName.length; i++) {
    let value = arrName[i]
    for (var j = i - 1; j >= 0 && arrName[j] > value; j--) {
      arrName[j + 1] = arrName[j]
    }
    arrName[j + 1] = value
  }
  return arrName
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']));
module.exports = Dictionary
