const readline = require('readline');
// your code here to initialize the program and take user input
const arr  = ['makan', 'duduk', 'tidur', 'terbang'];
const arr2 = ['anggi', 'angga', 'ani', 'adi']

function Dictionary(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      i = -1
    }
  }
  return arr;
}

console.log(Dictionary(arr));
console.log(Dictionary(arr2));

module.exports = Dictionary
