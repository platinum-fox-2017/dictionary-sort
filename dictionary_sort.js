const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr) {
  for(var j = 0; j < arr.length-1; j++){
    for (var i = 0; i < arr.length-1-j; i++) {
      if (check(arr[i], arr[i+1]) == false) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

function check(input1, input2) {
  if (input1[0] == input2[0]) {
    return (check(input1.substr(1), input2.substr(1)));
  } else if (input2[0] < input1[0]) {
    return false;
  }
  else {
    return true;
  }
  if (input1.substr(1) == "" || input2.substr(1) == "")
    return true;
}



console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));



// console.log(check('angora','anggad'));
