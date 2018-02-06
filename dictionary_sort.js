// const readline = require('readline');

function Dictionary(arr) {
	for (var i = 1; i < arr.length; i++) {
	  	for (var j = 0; j < i; j++) {
	  		if (arr[i] < arr[j]) {
	  			var temp = arr[i];
	  			arr[i] = arr[j];
	  			arr[j] = temp;
	  		}
	  	}
	}
  return arr
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));
console.log(Dictionary(['angga', 'anggi', 'ani', 'adi']));

// module.exports = Dictionary
