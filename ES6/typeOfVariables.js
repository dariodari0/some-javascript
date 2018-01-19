
/*----------------- let, const vs var --------------
@author: Dariusz M.
1 SCOPE:
let,const: block scope, function, if, namespaces ect.
var: global or local (in functon) scope
*/
//Use cases
	var a = 'a -  global scope';
	let b = 'b -  global scope';
	const c = 'c - global scope';
		{
			var a = 'a -  local scope'; // overwritten - its redeclaration
			let b = 'b -  local scope'; // it makes a local value
			const c = 'c -  local scope'; // makes a local value
			let d = 'd - only local scope'; // it makes only local value
			const e = 'e - only local scope'; // it makes only local value 
			var f = 'f - only local scope'; // it makes a global value
			
			console.log(a);// prints var from local scope
			console.log(b);// prints let from local scope`
			console.log(c);// prints const from local scope
			//console.log(e);// prints const from local scope 
		}
	console.log(a); // take a string from local scope and print it
	console.log(b);// print a let string from global scope 
	console.log(c);// print a const from global scope
	//console.log(d);// returns d is not defined (reference error)
	//console.log(e);// doesn't execute after error but it will return the same result (ref error)
	//console.log(f);//if no error it prints a string from local scope so its global value 

//Use cases in different scopes

// Example 1 only local variable:
function constTest(){
	const a = true; // function scope
	if(true){
		const a = false; // if scope
		console.log(a); // false
	}
	console.log(a); // true
}
	function letTest(){
	let b = true; //function scope
	if(true){
		const b = false; // if scope
		console.log(b); // false
	}
	console.log(b); // true
}
	function varTest(){
	var c = true;  //function scope
	if(true){
		var c = false; // if scope
		console.log(c); // false
	}
	console.log(c); // false 
}

// EXAMPLE 2 with global variable
/***************** var ****************/
var x = null; // global scope
function varTest(){
	var x = true; // function scope
	if(true){
		var x = false; // if scope
		console.log(x); //false 
	}
	console.log(x); //false
}
varTest();
console.log(x); //null

/***************** let ****************/
let y = null; // global scope
function letTest(){
	let y = true; // function scope
	if(true){
		let y = false; // if scope 
		console.log(y); //false
	}
	console.log(y); //true
}
letTest();
console.log(y); //null

/***************** const ****************/
const z = null; // global scope
function constTest(){
	const z = true;  // function scope
	if(true){
		const z = false; // if scope 
		console.log(z); //false
	}
	console.log(z); //true
}
constTest();
console.log(z); //null
/*	
2 RE- DECLARATION:
var: overwrites
let, const: syntax error - has been declared 

3 HOISTING:
var; works in global and function scope
let, const : doesn’t work - TDZ: temporal dead zone so returns Reference Error(not defined)
*/
let hiohi = 'global value';
(function() {
  // start TDZ for hiohi
  console.log(hiohi); //ref error - hiohi is not defined
  let hiohi = 'function sco'; // declaration ends TDZ for x
}());
/*
4 GLOBAL OBJECT - Window:
var: it adds to window object if there is declaration in global scope
let,const: they aren’t add to window object

/*----------------- const vs let --------------
1 CHANGE THE VALUE:
let : it is possible to modify
const: it is impossible - TypeError */
let number = 3;
number = 4; // now number returns 4
const anotherNumber = 3;
anotherNumber = 4; // TypeError
/*
2 CONST PROTECTION:
const: protects the primitive type but not the object
const:  protects the variable from assigning a different value
*/
const obj = ['example', 21312];
obj[2] = false; // b returns [“example”, 21312, false];
/*
3 DECLARATION WITHOUT INITIALIZE: 
*/
let a; // undefined like a var
const a; // Syntax Error: missing initializer 

/*----------------- When using: const, let or var --------------

1. You should to using const, unless you re-declare variables or change values in the object.
2. If you can't use const - use let.
3. Use var - if you need a specific property of var type for example add variable to global obj window or re-declaration variable.
*/
