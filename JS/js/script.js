//var string = "Hello";
//string += "World";
//console.log(string + "!");

//console.log((5 + 4) / 3);
//console.log(undefined / 5);

//function test1 (a) {
//	console.log(a/5);
//}

//test1(5);
/*
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum  += i;
}
console.log("sum of 0 through 9 is: " + sum);*/

/*function orderChickenWith(sideDish) {
		console.log("Chicken with " + (sideDish || "whatever!"));		
}

orderChickenWith("noodles");
orderChickenWith();*/

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log ("Company CEO name is: " + company.ceo.firstName);

// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},
// 	"stock of compnay": 110
// };

// console.log(facebook.ceo.firstName);

// function multiply(x, y) {
// 	return x * y;
// }
// multiply.version = "v.1.0.0";

// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));


// //passing functions as arguments
// function doOperationOn(x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(doubleAll(100));

// function test() {
// 	console.log(this);
// 	this.myName = "Yun";
// }
// test();
// console.log(window.myName);

/*function Circle(radius) {
	this.radius = radius;

	// this.getArea = function() {
	// 	return Math.PI * Math.pow(this.radius, 2);
	// };
}

Circle.prototype.getArea = 
	function() {
		return Math.PI * Math.pow(this.radius, 2);
	}

var myCircle = new Circle(10);
console.log(myCircle);
*/

//Object literals and "this"
/*var literalCircle = {
	radius: 10,

	getArea: function () {
		console.log(this);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());*/

//Arrays
/*var array = new Array();
array[0] = "SeungYun";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2] (array[0]);
console.log(array[3].course)*/

// Short hand array creation
/*var  names = [
	"SeungYun", 
	"Minku", 
	"Josh",
	{name: "Charlie"}
	];
console.log(names);

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}

names[100] = "Jim";
*/
/*
var names2 = ["SeungYun", "John", "Joe"];

var myObj = {
	name: "Yaakov",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};

for(var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}

for(var name in names2) {
	console.log("Hello " + names2[name]);
}
*/

//Closures
/*
function makeMultiplier (multiplier) {
	return (
		function (x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));*/

//Immediately Invoked FUnction Expression
//IIFE
(function (name) {
	console.log("Hello " + name);
})("Coursera!");