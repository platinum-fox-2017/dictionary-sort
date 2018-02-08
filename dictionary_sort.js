const readline = require('readline');

var nama = [ 'duDuK', 'Terbang', 'makan', 'tIdUr' ]



function ownSort(arr) {
  
  let newArr = []
  let oldIndex = []

  for(let i = 0; i < arr.length; i++){
    
    arr[i] += i
    newArr.push(arr[i].toLowerCase())
  }
  console.log(newArr)
  
  let nameOlah = newArr

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

  let hasil = []

  for(let i = 0 ; i < nameOlah.length;i++){
    let number = nameOlah[i].length - 1
    let numb = Number(nameOlah[i][number])
    hasil.push(arr[numb])
  }

  let newHasil = []
  for(let i = 0; i < hasil.length;i++){
    let word = ""
    for(let j = 0; j < hasil[i].length - 1;j++){
      word += hasil[i][j]
    }

    newHasil.push(word)
  }
  return newHasil
  // return nameOlah
}

console.log(ownSort(nama))

