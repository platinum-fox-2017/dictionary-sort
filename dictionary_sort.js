const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(arrName) {
  let newArr = []
  for (var i = 0; i < arrName.length; i++) {
    newArr.push(arrName[i].toLowerCase())

  }
  for (var i = 0; i < newArr.length; i++) {
    let value = newArr[i]
    let value2 = arrName[i]
    console.log(value);
    for (var j = i - 1; j >= 0 && newArr[j] > value; j--) {
      newArr[j + 1] = newArr[j]
      arrName[j+1] = arrName[j]
    }
    newArr[j + 1] = value
    arrName[j + 1] = value2
  }

  return arrName
}

console.log(Dictionary(['makan','DuDuK','tIdUr','Terbang']));
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi']));
module.exports = Dictionary
