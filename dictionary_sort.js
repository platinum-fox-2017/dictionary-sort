function dictionarySort(input){
  var temp = []
  var minIndex = ""

  for(var i=0; i<input.length; i++){
    minIndex = i
    for(var j=i+1; j<input.length; j++){
      if(input[j] < input[minIndex]){
        minIndex = j
      }
    }
    temp = input[i]
    input[i] = input[minIndex]
    input[minIndex] = temp
  }
  return input.join()
}
console.log(dictionarySort(["makan","duduk","tidur","terbang"]));
console.log(dictionarySort(["anggi","angga","ani","adi"]));
