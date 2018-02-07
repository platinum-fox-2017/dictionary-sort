// const readline = require('readline');

function dictionarySort(arr) {
	for (var i = 1; i < arr.length; i++) {
	  	for (var j = 0; j < i; j++) {
	  		if (arr[i].toLowerCase() < arr[j].toLowerCase()) {
	  			var temp = arr[i];
	  			arr[i] = arr[j];
	  			arr[j] = temp;
	  		}
	  	}
	}
  return arr
}

// console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
// console.log(dictionarySort(['angga', 'anggi', 'ani', 'adi']));
console.log(dictionarySort(['makan','DuDuK','tIdUr','Terbang']));

// module.exports = Dictionary
