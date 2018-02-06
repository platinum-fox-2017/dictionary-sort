const readline = require('readline');

var nama = ['kevin','ketek','kanu','kenny']



function ownSort(arr) {
  
  let nameOlah = arr

  for(let i = 0;i < nameOlah.length; i++){
    let nilaiMinimum = nameOlah[i]
    let nilaiMinimumIndex = i
    let count = 0
    for(let j = i+1;j < nameOlah.length;j++){
      
       if(nameOlah[j] < nilaiMinimum){
        nilaiMinimum = nameOlah[j]
        nilaiMinimumIndex = j
        count++
       } 
    }

    if(count > 0){
      let tmp = nameOlah[i]
      nameOlah[i] = nameOlah[nilaiMinimumIndex]
      nameOlah[nilaiMinimumIndex] = tmp
    }
  }

  return nameOlah
}

console.log(ownSort(nama))

module.exports = Dictionary