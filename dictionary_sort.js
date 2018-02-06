const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(arr) {
    // console.log(arr);
    var hasilSort = [];

    while (arr.length != 0) {
        var angkaMin = arr[0];    
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < angkaMin) {
                angkaMin = arr[i];
            }
        }
        hasilSort.push(angkaMin);
        // console.log(angkaMin); // duduk

        var indexMin = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == angkaMin) {
                indexMin = i;
            }
        }        
        // console.log(indexMin); // 1

        arr.splice(indexMin, 1);
        // console.log(arr); // duduk udah ilang
        // return hasilSort; // 2
    }
    return hasilSort;

}

console.log(Dictionary(['makan','duduk','tidur','terbang']));




module.exports = {
    Dictionary
}