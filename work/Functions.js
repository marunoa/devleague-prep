//Variables

var a;
var b;
var sum;
var difference;
var product;
var myFullName;
var canDrinkBeer;
var howMany; 

//Logic

a = 3;
b = 5;
c = 7;
firstName = "Tunui";
lastName = "Tinorua";
age = 25;
sum = add(a,b);
difference = subtract(b,a);
product = multiply(b,a);
howMany = 56
myFullName = "firstName " , " lastName";
canDrinkBeer = verifyDrinkingAge(age);
TypeOfParty = throwParty(canDrinkBeer);
food = "hawaiian food";

console.log("The sum of a and b is: " + sum);
console.log("The difference between b and a is: " +  difference);
console.log("The product of a and b is: " + product);
console.log("My football team lost " + difference + " times this week");
console.log("I CAN ADDZ " + sum + " NUMBERS");
console.log("checkProduct is: " + product * difference);
console.log("addThenSubtract is: " , sum - c);
console.log("addThenMultiply is: " + sum * c);
console.log("Aloha my name is " + firstName , lastName);
console.log(canDrinkBeer);
console.log(TypeOfParty);
console.log(firstName , lastName + " loves to eat " + food , "!");
console.log(repeater(howMany));

//Functions

function add(x , y) {
	return x + y;
}

function subtract(y , x) {
	return y - x;
}

function multiply(y , x) {
	return y * x;
}

function checkDifference(y , x) {
	
}

function checkSum(x , y) {

}

function checkProduct(y , x) {
	return product * difference;

}

function addThenSubtract(x , y , z) {
	return subtract(add(x, y) , z);

}
function addThenMultiply(x , y ,z) {
	return multiply(add(x , y) , z);

}

function createFullName(firstName , lastName) {
	return "firstName " , " lastName";
}

function verifyDrinkingAge(age) {
	if (age < 21) {
		return false;
	} else {
		return true;
	}
	
}

function throwParty(canDrinkBeer) {
	if(canDrinkBeer === false) {
		return "The Party will have tons of Cake!";
	} else {
		return "This Party will have an open bar.";
	}
}

function eatFood(firstName , lastName , food) {
	return "firstName " , " lastName " , "loves to eat " , " food";

}

function repeater(howMany) {
	if(canDrinkBeer === true) {
		return "Bacon Pancakes, makin' Bacon Pancakes...";
	} else {
		return "Let it go.... LET IT GOOOOOOoOoOoOo...";
	}


}
