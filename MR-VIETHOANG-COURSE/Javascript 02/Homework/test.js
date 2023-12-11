openBracket = [")", "]", "}"];
closeBracket = ["(", "[", "{"];

var isValid = function (s) {
	console.log(s[0]);
	console.log(openBracket.indexOf(s[0]));
};

// console.log(openBracket.indexOf("]"));

console.log(isValid("() []"));