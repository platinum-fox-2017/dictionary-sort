// const readline = require('readline');
// your code here to initialize the program and take user input

// module.exports = Dictionary

function dictionary_sort(arr) {
  var arrSorted = []

  while(arr != 0) {
    var minText = arr[0]
    var iMin = 0
    for(var i=0; i<arr.length; i++) {
      if(minText > arr[i]) {
        minText = arr[i]
        iMin = i
      }
    }

      arrSorted.push(minText)
      arr.splice(iMin, 1)
  }
  return arrSorted
}

console.log(dictionary_sort(['makan','duduk','tidur','terbang']));
//duduk,makan,terbang,tidur
console.log(dictionary_sort(['anggi','angga','ani','adi']));
//adi,angga,anggi,ani
