const readline = require('readline');
// your code here to initialize the program and take user input
function dictSort(array){
  var sortedArr = [];
  var arrLowerCase = [];
  for (var i = 0; i < array.length; i++) {
    arrLowerCase.push(array[i].toLowerCase());
  }
  while(array.length > 0 && array[0] !== undefined){
    var smallestIdx = findMin(arrLowerCase);
    var smallest = array[smallestIdx];
    sortedArr.push(smallest);
    array.splice(smallestIdx, 1);
    arrLowerCase.splice(smallestIdx, 1);
  }
  return sortedArr;
}


function findMin(array){
  if(array.length === 1){
    return 0;
  } else {
      var smallest = array[0]; // find smallest
      var index = 0;
      for (var i = 1; i < array.length; i++) {
        if (smallest > array[i]){
          smallest = array[i];
          index = i;
        }
      }
      return index;
    }
}

var array = [ 'Makan', 'makalah', 'tIdur', 'Terbang' ];
console.log(dictSort(array));
module.exports = Dictionary
