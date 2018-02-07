const readline = require('readline');
// your code here to initialize the program and take user input

var arrOfWord1=['makan','duduk','tidur','terbang'];
var arrOfWord2=['anggi','angga','ani','adi'];


function dictionarySort(arr) {
    for(var i=1; i<arr.length; i++) {
        for(var j=0; j<i; j++) {
          if(arr[i].toLowerCase()<arr[j].toLowerCase()) {
            var temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
          }
        }
      }

    return arr.join(',');
}

    

function min(arr) {
    var min=arr[0]
    for(var i in arr) {
        if(min>arr[i]) {min=arr[i]}
    }
    console.log(min);
}
console.log(dictionarySort(arrOfWord1));
console.log(dictionarySort(arrOfWord2));
console.log(dictionarySort(['makan','DuDuK','tIdUr','Terbang']));

