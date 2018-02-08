const readline = require('readline');
// your code here to initialize the program and take user input
let Dictionary = (input) => {
    for(let i=0; i<input.length; i++){
        let min =input[i];
        if(input[i+1] !== undefined && input[i].toLowerCase()>input[i+1].toLowerCase()){
            min = input[i+1];
        }
        if(min !== input[i]){
            let temp = input[i];
            input[i] = input[i+1];
            input[i+1] = temp;
            i=-1;
        }
    }
    return input;
}

let inputA = ['makan','duduk','tidur','terbang'];
let inputB = ['anggi','angga','ani','adi'];
let inputC = ['makan','DuDuK','tIdUr','Terbang'];

console.log(Dictionary(inputA));
console.log(Dictionary(inputB));
console.log(Dictionary(inputC));
// kalo input console.log(dictionarySort(['makan','DuDuK','tIdUr','Terbang']));
// hasilnya salah : DuDuK,Terbang,makan,tIdUr
// harusnya : DuDuK,Terbang,tIdUr,makan
// RALAT ya, harusnya hasil nya : DuDuK, makan, Terbang,tIdUr


module.exports = Dictionary
