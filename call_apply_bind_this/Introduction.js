 /* 
  Keyword this is:
 - a reserved keyword in JavaScript
 - Usually determined by how a function is called (what we call 'execution context')
 - Can be determined using four rules: global, object/implicit, explicit, new.
 
 The four ways to always figure out what the keyword 'this' is.

	var person = {
		fitstName: "Dariusz";
		determineContext: this;
	}
	person.determineContext; /returns windoww

	
	A keyword 'this' is defined when a function is invoked!!
	There isn't a function being run here to create a new value
	of the keyword 'this' so the value of 'this' is still the window (global object)!
	
	var person = {
		firstName: "Dariusz",
		sayHi: function(){
			return "Hi " + this.fitstName;
		},
		determineContext: function(){
			return this === person;
		},
		dog: {
			sayHello: function(){
				return "Hello " + this.firstName;
			},
			determineContext: function(){
				return this === person;
			}
		}
	}
	person.dog.sayHello(); // Hello undefined
	person.dog.determineContext();// false
	
		Call, apply and bind are three method that are used to explicitly set the value of the keyword this
		We use them when we want full control over what the value of the keyword 'this' will be.

		So, it has precedence over the first two rules. Call and apply will invoke the function that they are
		callback on immediately whereas bind will return a new function definition with the value of the keyword this
		explicitly set. Finally, call and bind except an infinite number of parameters whereas apply takes two 
		
		#####################################################################################################################
1. CALL : 
		
		person.dog.sayHello.call(person); // Hello Dariusz //we are not invoking methods in dog object
		person.dog.determineContext.call(person); // true
		
		
		var dariusz = {
		firstName: "Dariusz",
		sayHi: function(){
			return "Hi " + this.fitstName;
			}
		}
		var jan = {
		firstName: "Jan",
		sayHi: function(){
			return "Hi " + this.fitstName;
			}
		}
		dariusz.sayHi(); // Hi Dariusz
		jan.sayHi(); // Hi Jan
		
		***************************************************************************************************
		A very common use case using call (refactor the duplication). The question is: How we can 'borrow'
			the sayHi function from dariusz and set the value of 'this' to be jan?
		This is answer:
		
		var dariusz = {
			firstName: "Dariusz",
			sayHi: function(){
				return "Hi " + this.fitstName;
			}
		}
		var jan = {
			firstName: "Jan"
		}
		dariusz.sayHi(); // Hi Dariusz
		dariusz.sayHi.call(jan); // Hi Jan
		
		***************************************************************************************************
		Or, we can make a sayHi function for anyone:
		
		function sayHi(){
			return "Hi " + this.firstName;
		}
		var dariusz = {
			firstName: "Dariusz"
		}
		var jan = {
			firstName: "Jan"
		}
		sayHi.call(dariusz); // Hi Dariusz
		sayHi.call(jan); // Hi Jan
				
		#####################################################################################################################
		
2. APPLY (it's almost identical to CALL - except the parameters):
		
		function addNumbers(a,b,c,d){
			return "Hi " + this.firstName + ", you just calculated " + (a+b+c+d);
		}
		var dariusz = {
			firstName: "Dariusz"
		}
		var jan = {
			firstName: "Jan"
		}
		addNumbers.call(dariusz,1,2,3,4); // Hi Dariusz, you just calculated 10
		
		// but if we use apply, we can put all arguments inside of one array
		addNumbers.apply(dariusz,[1,2,3,4]); // Hi Dariusz, you just calculated 
		
		// So, when a function does not accept an array, apply will spread out values in an array for us.
		
		***************************************************************************************************

		// For example: Math.max([4,5,23,1]) //returns NaN
		// Then, we should to use apply this way: Math.max.apply(this, [4,5,23,1]); //returns 23
				
		***************************************************************************************************
		Other example:
		
		function sumValues(a,b,c){
			return a+b+c;
		}
		var values = [4,2,11];
		
		sumValues(values); //returns "4,2,11undefinedundefined"
		
		// the solution is:
		sumValues.apply(this, values); //returns 17
		
		#####################################################################################################################
		
3. BIND ( looks like a call, but instead of immediately invoking the function it returns a new function to us with the keyword 'this'):

		function addNumbers(a,b,c,d){
			return "Hi " + this.firstName + ", you just calculated " + (a+b+c+d);
		}
		var dariusz = {
			firstName: "Dariusz"
		}
		var jan = {
			firstName: "Jan"
		}
		
		var dariuszCalc = addNumbers.bind(dariusz,1,2,3,4);
		dariuszCalc(); // returns "Hi Dariusz, you just calculated 10"
		
		//when we do not know all of the arguments that will be passed to a function which means we do not want to invoke the function right away.
		// We just want to return a new function with some of the parameters (partial aplication)
		
		var dariuszCalc1 = addNumbers.bind(dariusz,1,2); // we still need to add an extra set of parameters to call that function
		dariuszCalc1(5,5); // returns "Hi Dariusz, you just calculated 13"
		
		var dariuszCalc2 = addNumbers.bind(dariusz); // we still need to add all set of parameters to call that function
		dariuszCalc2(4,3,2,1); // returns "Hi Dariusz, you just calculated 10"
		
		//So, bind is useful, because we do not need to know all the parameters to the function when we bind it. We only need to know what we want. 
		
		***************************************************************************************************
		
		Another, very common use case of Bind is to set the context of the keyword 'this' for a function that will be called at a later point in time (asynchronous code)
		
		var dariusz = {
			firstName: "Dariusz",
			sayHello: function(){
				setTimeout(function(){
					console.log("Hello " + this.firstName);
				}.bind(this), 1000);
			}
		}

		#####################################################################################################################
		
4. NEW keyword:
 
 // The new keyword is used with the function and inside of the function definition. The keyword 'this' will refer to the new object that is created.
 // When keyword 'new' is used an implicit return 'this' is added to the function which uses it.
		
		function Person(firstName, lastName){
			this.firstName = firstName;
			this.lastName = lastName;
		}
		
		var dariusz = new Person("Dariusz","Dario");
		
		#####################################################################################################################
		
		
		RECAP:
		
		1. The keyword 'this' is a reserved keyword in JavaScript and its value is determined at execution.
		2. It is either set using the global context, object binding, explicit binding, or the new keyword.
		3. When set in the global context in a function, it is either the global object (window if in the browser) or undefined (if we are using strict mode).
		4. To explicitly set the value of the keyword 'this', we use call,apply or bind.
		5. We can also use the 'new' keyword to set the context of 'this'. 
		
	
			
	
 */
