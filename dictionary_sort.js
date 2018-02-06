// const readline = require('readline');

function dic(arrOfWord){
  for(var i=1; i<arrOfWord.length; i++){
    for(var j=0; j<=i-1; j++){
      var belakang = arrOfWord[i];
      var depan = arrOfWord[j];
      if(arrOfWord[i]<arrOfWord[j]){
        arrOfWord[j]=belakang;
        arrOfWord[i]=depan;
      }
    }
  }
  return arrOfWord;
}

console.log(dic(['makan','duduk','tidur','terbang'])); //duduk, makan, terbang, tidur
console.log(dic(['anggi','angga','ani','adi','aid'])); //adi, angga, anggi, ani

// module.exports = Dictionary
