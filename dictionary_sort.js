const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arr) {
    // console.log('===0Ori', arr);
    
    // TO CREATE LOWERCASE ARRAY
    var arrLower = [];
    for (var i = 0; i < arr.length; i++) {
        arrLower.push(arr[i].toLowerCase());
    }
    // console.log('===1Lowered', arrLower);

    // TO SORT LOWERCASED ARRAY
    var hasilSortLower = [];
    while (arrLower.length != 0) {
        var angkaMin = arrLower[0];    
        var indexMin = 0;

        for (var i = 0; i < arrLower.length; i++) {
            if (arrLower[i] < angkaMin) {
                angkaMin = arrLower[i];
                indexMin = i;
            }
        }
        hasilSortLower.push(angkaMin);
        // console.log(angkaMin); // duduk
        // console.log(indexMin); // 1

        arrLower.splice(indexMin, 1);
        // console.log(arrLower); // duduk udah ilang
        // return hasilSortLower; // 2
    }
    // console.log('===2Sorted', hasilSortLower);

    // TO CREATE INDEX OF ORIGINAL ANSWER
    var arrIndexSorted = [];

    for (var i = 0; i < hasilSortLower.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (hasilSortLower[i] == arr[j].toLowerCase()) {
                arrIndexSorted.push(j);
            }
        }
    }
    // console.log('===?Lowered', arrLower); arrlower kosong
    // console.log('===3Index', arrIndexSorted);

    // CREATE ARRAY BASED ON ORIGINAL INPUT
    var arrResult = [];

    for (var i = 0; i < arrIndexSorted.length; i++) {
        arrResult.push(arr[arrIndexSorted[i]]);
    }

    return arrResult;

}

// console.log(Dictionary(['makan','duduk','tidur','terbang']));
//[ 'duduk', 'makan', 'terbang', 'tidur' ]

console.log(Dictionary(['makan','DuDuk','tIdUr','Terbang']));



module.exports = {
    Dictionary
}