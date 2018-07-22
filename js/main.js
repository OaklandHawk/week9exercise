// var stringArray = ["Taylor", "Ozzie", "Katie", "Natalie", "Hannah"];

// console.log(stringArray.length);

// for(i = 0; i < stringArray.length; i++) {
// 	console.log(stringArray[i].length);
// }

// // stringArray.reverse()
// // console.log(stringArray);

// var copyArray = stringArray.slice()
// console.log(copyArray);

// copyArray.reverse();
// console.log(copyArray);

// stringArray.sort();

// var numberArray = [50, 30, 90, 200, 190];
// numberArray.sort(function(a, b) {
// 	console.log(a, b);
// 	return a - b;
// });
// console.log(numberArray);

// //    Then sort it in descending order
// numberArray.sort(function(a, b){
// 	console.log(b, a);
// 	return b - a;
// });
// console.log(numberArray);

// var threeStringArray = ["A's", "Hawks", "Raiders"];

// threeStringArray.push("Warriors", "Giants");

// threeStringArray.shift();

// console.log(threeStringArray);

var emptyArray = [];

var myList = document.getElementsByTagName("ul")[0];

function createList() {
	var inputValue = document.getElementsByTagName("input")[0].value;

	emptyArray.push(inputValue);

	myList.innerHTML = "";

for(i = 0; i < emptyArray.length; i++) {

	var newList = document.createElement("li");

	newList.innerHTML = emptyArray[i];

	myList.appendChild(newList);
	}
}



