const readline = require('readline');

    function dictionarySort(arr){
        if(arr.length <= 1){
            return arr;
        } else {
            //cari nilai minimum
            var sortWord = [];
            var minWord = arr[0];
            for(var i=0; i<arr.length; i++){
                if(arr[i] < minWord){
                    minWord = arr[i];
                }
            }

            for(var j=0; j<arr.length; j++){
                if(arr[j] == minWord){
                    sortWord.push(arr[j]);
                    arr.splice(j,1);
                }
            }

            return sortWord.concat(dictionarySort(arr));

        }

    }
    
    console.log(dictionarySort(['doel','magna','avatar']));
    console.log(dictionarySort(['anggi','angga','ada','ani','adi']));
    console.log(dictionarySort(['makan','duduk','tidur','terbang']));

// module.exports = {
//     Dictionary
// };
