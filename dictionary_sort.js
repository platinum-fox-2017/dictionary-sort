const readline = require('readline');
// your code here to initialize the program and take user input
const arr  = ['makan', 'duduk', 'tidur', 'terbang'];
const arr2 = ['anggi', 'angga', 'ani', 'adi'];
const arr3 = ['makan', 'DuDuK', 'tIdUr', 'Terbang'];

function Dictionary(arr){
  let newArr = [];

  for(let j=0; j<arr.length; j++){
    newArr.push(arr[j].toLowerCase())
  }

  for(let i=0; i<arr.length; i++){
    if(newArr[i]>newArr[i+1]){
      let temp = newArr[i+1];
      newArr[i+1] = newArr[i];
      newArr[i] = temp;

      let temp2 = arr[i+1];
      arr[i+1] = arr[i];
      arr[i] = temp2;
      i = -1
    }
  }
  return arr.join(',');
}

console.log(Dictionary(arr));
console.log(Dictionary(arr2));
console.log(Dictionary(arr3));

module.exports = Dictionary
