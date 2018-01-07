
/*
	A clousure is a functiom that makes use of variables defined in outer 
	functions that have previously returned.
*/

function outer(){
	var start = "Clousures are";
	return function inner(){
		return start + " " + "awesome";
	}
}

function outer1(a){
	return function inner(b){
		return a+b;
	}
}

// then we can use that:
var storageOuter1 = outer1(4);
storageOuter1(5); // returns 9

//Recap: Clousure exist when an inner function makes use of variables
//defined from an outer function that has returned!
// If the inner function does not make use of any of the external variables
// all we have is a nested function.

/*
	1. We have to 'return' the inner function for this to work
	3. We can either call the inner function right way by using
	an extra () or we can store the result of the function in a var.
	4. We do NOT have to give the inner function a name - we can make 
	it anonymous (we just called it "inner"	for learning purposes"
*/

function outerFunc(){
	var data = "something from outer";
	var fact = "Remeber me!";
	return function innerFunc(){
		debugger // we can examine variables in the dev tools on chrome browser
		return fact;
	}
}
// Clousures don't remember everything from an outer function - just the variables they need.

function classRoom(){
	var instructors = ["Dariusz", "Jan"];
	return {
		getInstructors: function(){
			return instructors.slice();
		},
		addInstructors: function(instr){
			instructors.push(instr);
			return instructors.slice();
		}
	}
}
var check = classRoom();
check.getInstructors().pop(); //"Jan"
check.getInstructors().pop();//"Jan"
check.getInstructors();//["Dariusz", "Jan"] 
// So, nothing happened with the varialbles - they are private
