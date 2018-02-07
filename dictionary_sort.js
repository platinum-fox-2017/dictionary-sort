/*
contoh 1

input: 
var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang']

output:
duduk,makan,terbang,tidur


contoh 2

input:
var arrOfWord = ['anggi','angga', 'ani','adi']

output:
angga,anggi,adi,ani

*/


// Release 0
var arrOfWord1 = ['makan', 'duduk', 'tidur', 'terbang'];
var arrOfWord2 = ['anggi','angga', 'ani','adi'];
var arrOfWord3 = ['makan','DuDuK','tIdUr','Terbang']


function dictionary(arr){
    var temp;
    var min;
  
    for (var i = 0; i < arr.length-1; i++){
      min = i;
      for (var j = i+1; j < arr.length; j++){
        if (arr[min].toLowerCase() > arr[j].toLowerCase()){
          min = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }

    return arr.join(',');
}

console.log(dictionary(arrOfWord1))
console.log(dictionary(arrOfWord2))
console.log(dictionary(arrOfWord3))