const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr){
    return selectionSort(arr);
}

function selectionSort(arr){
    for(var i=1; i<arr.length; i++){
        for(var j=0; j<i; j++){
            var asal = arr[i];
            var pembanding = arr[j];
            if(arr[j]>arr[i]){
                arr[j] = asal;
                arr[i] = pembanding;
            }
        }
    }
    return arr.join(', ');
}

console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

// module.exports = Dictionary
