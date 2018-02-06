const readline = require('readline');
// your code here to initialize the program and take user input
function dictSort(array){
  var sortedArr = [];
  while(array.length > 0 && array[0] !== undefined){
    var smallestIdx = findMin(array);
    var smallest = array[smallestIdx];
    sortedArr.push(smallest);
    array.splice(smallestIdx, 1);
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

module.exports = Dictionary
