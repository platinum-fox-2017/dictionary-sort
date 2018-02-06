const readline = require('readline');
let test1 = ['makan','duduk','tidur','terbang']
let test2 = ['anggi','angga','ani','adi']

function Dictionary(arr){
  for ( let i = 0 ; i < arr.length ; i++ ){
      if(arr[i+1] < arr[i]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        i = -1
      }
  }
  return arr.join(',')
}


console.log(Dictionary(test1)); //duduk,makan,terbang,tidur
console.log(Dictionary(test2)); //adi,angga,anggi,ani







module.exports = Dictionary
