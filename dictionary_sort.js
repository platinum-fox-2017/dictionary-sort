function dictionarySort(input) {
  var arr=[];
  var temp=0;

  for(var j=0;j<input.length;j++)
    {
        temp=j;
        for(var i=j+1;i<input.length;i++)
          {
              if(input[i].toLowerCase()<input[temp].toLowerCase())
                {
                  temp=i;
                }
          }

          arr=input[j];
          input[j]=input[temp];
          input[temp]=arr;
    }
    return input.join();
}


console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));
console.log(dictionarySort(['makan','DuDuK','tIdUr','Terbang']));
