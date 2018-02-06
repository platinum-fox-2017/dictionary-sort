//const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(array){
    //binary search 
    for(var i = 1; i < array.length; i++){
       var current = array[i];
      for(var j = i - 1; j >= 0 && (array[j] > current) ; j--){
        array[j + 1] = array[j];
      }    
      array[j + 1] = current;
    }
    return array;
}


console.log(Dictionary(['makan','duduk','tidur','terbang']))
console.log(Dictionary(['anggi','angga','ani','adi']))

module.exports = Dictionary
