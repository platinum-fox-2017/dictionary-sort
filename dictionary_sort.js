function dictionarySort(input) {
  var arr=[];
  var temp=0;


for(var j=0;j<input.length;j++)
  {
    temp=j;
    for(var i=j+1;i<input.length;i++)
        {
          if(input[i]<input[temp])
              {
               // min=input[i];
                temp=i;
              }

          }

    arr=input[j];
    input[j]=input[temp];
    input[temp]=arr;

  }
      return input;
}


console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));
