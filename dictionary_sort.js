const readline = require('readline');

function Dictionary(arr){
  let temp = 0
  for(i=0;i<arr.length-1;i++){
    if(arr[i+1]<arr[i]){
      temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
      i = -1
      console.log(arr);
    }
  }
  return arr
}

console.log(Dictionary(['makut','servi','juhi','logres']));
