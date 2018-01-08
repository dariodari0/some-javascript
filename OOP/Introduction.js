/*	OOP - Object Oriented Programing
	
	1. A programming model based around the idea of objects.
	2. These objects are constructed from classes, which we can think of like a blueprint.
	We call these objects created from classes "instances".
	3. In OOP we strive to make our classes abstract and modular (shareable code).
	
	Important: JavaScript does not have classes built into it. So, we use functions and objects.
	Instead, of making an infinite number of different objects, let's see if we can create a function
	to construct these similar objects. So, we have a "constructor" function.
	
	
	Example 1:
	
	function House(bedrooms, bathrooms, numSqft){
		this.bedrooms = bedrooms;
		this.bathrooms = bathrooms;
		this.numSqft = numSqft;
	}
	
	Notice: 
	1. Capitalization of the function name - this is convention.
	2. Use the keyword 'this'.
	3. We are attaching properties onto the keyword 'this'. We would like the keyword 'this' to refer to 
	the object we will create from out constructor function.
	
	var firstHouse = House(2,2,1000);
	firstHouse //returns undefined - 	1. we are not returning anything from the function. 
									                 	2. we are not explicitly binding the keyword 'this' or placing it
									                	inside a declared object. So, 'this' is the global object.
	//The solution is: using keyword 'new':
	
	var firstHouse = new House(2,2,1000);
	firstHouse // returns House {bedrooms: 2, bathrooms: 2, numSqft: 1000}
	firstHouse.bedrooms // 2
	firstHouse.bathrooms // 2
	firstHouse.numSqft // 1000
	
	//What does the new keyword do?
	1. Creates an empty object.
	2. Then sets the keyword 'this' to be that empty object.
	3. Adds the line 'return this' to the end of the function, which follows it.
	4. Adds a property onto the empty object called "__proto__", which links 
	the prototype property on the constructor function to the empty object. 
	
	
	Example 2: 
	
	function Dog (name, age){
		this.name = name;
		this.age = age;
		this.bark = function(){
			return this.name + " just barked!";
		}
	}
	
	var teo = new Dog('Teo', 3);
	teo.bark() // "Teo just barked!"
	
	var peggi = new Dog('Peggi', 1); 
	peggi.bark
	ƒ (){
				return this.name + " just barked!";
			}
	peggi.bark(); //"Peggi just barked!"
	
  #################################################################################3
	
	Multiply constructor:
	
	//We can reafactor the code quite a bit using call + apply
	
	Example 3: 
	
	function Car (brand, model, year){
		this.brand = brand;
		this.model = model;
		this.year = year;
		this.numberWheels = 4;
	}
	
	// using call
	function Motorcycle (brand, model, year){
		Car.call(this, brand, model, year);
		this.numberWheels = 2;
	}
	
	// using apply (second parameter - an array)
	function Motorcycle (brand, model, year){
		Car.apply(this, [brand, model, year]);
		this.numberWheels = 2;
	}
	
	// better: using apply with arguments and we do not need to pass in parameters
	function Motorcycle (){
		Car.apply(this, arguments);
		this.numberWheels = 2;
	}

*/
