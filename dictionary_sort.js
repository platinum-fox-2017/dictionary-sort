function arrofword(arrkata){

  for(let i=0;i<arrkata.length-1;i++){
    var index=i
    for(let j=i+1;j<arrkata.length;j++){
      if(arrkata[j]<arrkata[index]){
        index=j
      }
    }
    if(index != i){
      var insert = arrkata[i]
      arrkata[i]=arrkata[index]
      arrkata[index] = insert
    }

  }
  return arrkata.join(',')

}

console.log(arrofword(['makan','duduk','tidur','terbang'])) //duduk,makan,terbang,tidur
console.log(arrofword(['anggi','angga','ani','adi'])) //adi.angga,anggi,ani
