const readline = require('readline');
// 97-122
// your code here to initialize the program and take user input
function dictionarySort(arr) {
  return ownSort(arr);
}

function ownSort(arr) {
  var result = [];
  var currentMin = arr[0];
  var indexMin = 0;

  if (arr.length === 1) {
    return arr;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
      indexMin = i;
    }
  }

  result.push(currentMin);
  arr.splice(indexMin, 1);
  var finalResult = result.concat(ownSort(arr));
  return finalResult;
}

// TEST CASE
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

// module.exports = Dictionary