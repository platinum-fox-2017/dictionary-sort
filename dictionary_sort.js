const readline = require('readline');
// your code here to initialize the program and take user input
let Dictionary = (input) => {
    for(let i=0; i<input.length; i++){
        let min =input[i];
        if(input[i]>input[i+1]){
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

console.log(Dictionary(inputA));
console.log(Dictionary(inputB));


module.exports = Dictionary
