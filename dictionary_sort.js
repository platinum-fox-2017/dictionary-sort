const readline = require('readline');
// your code here to initialize the program and take user input
const Dictionary = array=>{
    for(let i =0;i<array.length;i++){
        let indexAwal = i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[indexAwal]){
                indexAwal=j
            }
        }
        let swap = array[indexAwal]
        array[indexAwal] = array[i]
        array[i] = swap
    }
    return array
}

let arrOfWord = ['makan','duduk','tidur','terbang']
let arrOfName = ['anggi','angga','ani','adi']
console.log(Dictionary(arrOfWord))
console.log(Dictionary(arrOfName))

module.exports = Dictionary
