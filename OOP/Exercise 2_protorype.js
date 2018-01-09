 /*
	1. Every constructor function has a property on it called "prototype", which is an object.
	2. The prototype object has a property on it called "constructor", which points back to the constructor function.
	3. Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking 
	the object and the prototype property of the constructor function.
	
	
	Code: 
	
	function Person(firstName){
		this.name = name;
	}
	Person.prototype //returns Object {constructor: f}
	
	var dario = new Person ("Dariusz"); 
	
	// since we used the new keyword, we have established a link between the object and the prototype property we can access that using __proto__.		
	dario.__proto__ === Person.prototype  //returns true 
	
	// the Person.prototype object also has property called constructor which pints back to the function.
	Person.prototype.constructor === Person // returns true
	
	
	//Create a constructor function for a Vehicle: every object created from this should have a make, model and year property. Each object should also have property called isRunning, which should be set to false.
	// Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true.
	// Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false.
	// Every object created from the Vehicle constructor should have a method called honk, which returns the string "beep" only if isRunning property is true.
 */	
	//The solution is:
	
	function Vehicle(make,model,year){
		this.make = make;
		this.model = model;
		this.year = year.
		this.isRunning = false;
	}
	
	Vehicle.prototype.turnOn = function(){
		 this.isRunning = true;
	}
	Vehicle.prototype.turnOff = function(){
		 this.isRunning = false;
	}
	Vehicle.honk = function(){
			if(this.isRunning) return "beep";
		}

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

function Person (firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.family = []; //step 3
}

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/
Person.prototype.fullName = function(){
	return this.firstName + " " + this.lastName;
}
// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you adding an additional line of code to your Person constructor.
/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. 
	   To make sure that the object you are adding is an object construed from the Person constructor (HINT - take a look at the instance of keyword). 
	   Make sure that your family array does not include duplicates! This method should return the length of the family array.
*/

Person.prototype.addToFamily = function(person){
	if(this.family.indexOf(person) === -1 && person instanceof Person){
	     this.family.push(person);
	}
	return this.family.length;
}

/*
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 
*/

// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 


Array.prototype.map = function(callback){
	var newArr = [];
	for(var i = 0; i < this.length; i++){  // hint: this.length = array.length
		newArr.push(callback(this[i],i,this)); // hint: this[i] = array[i], i = index , this = array
	}
	return newArr;
}

// 2 - Implement a function called reverse that reverses a string and place it on the String.prototype


String.prototype.reverse = function(){
	var newString = '';
	for (var i=this.length -1; i >= 0; i--){
		newString += this[i];
	}
	return newString;
}
