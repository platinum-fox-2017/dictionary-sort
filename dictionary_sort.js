const dictionary = arr =>{
    for (let i = 0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }
    return arr.join(',')
}

let arrOfWord1 = ['makan','duduk','tidur','terbang']
let arrOfWord2 = ['anggi','angga','ani','adi']

console.log(dictionary(arrofWord1))
console.log(dictionary(arrofWord2))
