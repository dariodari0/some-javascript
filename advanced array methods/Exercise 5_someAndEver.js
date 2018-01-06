   /* Exercise about Advanced Array Methods from course on udemy website 
       
	   some and every array methods
	    
	   SOME:
	  1. Iterates through an array.
	  2. Runs a callback on each value in the array.
	  3. If the callback  returns true for at least one single value, return true.
	  4. Otherwise, return false.
		EVERY:
	  1. Iterates through an array.
	  2. Runs a callback on each value in the array.
	  3. If the callback returns false for any single value, return false.
	  4. Otherwise, return true.
		
	  
	   Important: The result of the callback will always be a boolean. Like the filter method.
	   
	    How does look the some method?
		
		function some(array, callback){
			for(var i = 0; i < array.length; i++){
				if(callback(array[i], i, array)){
					return true;
				}
			}
			return false;
		}
		
		How does look the every method?
		
		function some(array, callback){
			for(var i = 0; i < array.length; i++){
				if(callback(array[i], i, array) === false){
					return false;
				}
			}
			return true;
		}
	*/
	
	/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
// the solution is: 
function hasOddNumber(arr){
    return arr.some(function(value){
        return value % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/
// the solution is: 
function hasAZero(num){
    return num.toString().split('').some(function(value){
       return value === '0'; 
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
// the solution is: 
function hasOnlyOddNumbers(arr){
    return arr.every(function(value){
       return value % 2 !== 0; 
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). 
If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
// the solution is: 
function hasNoDuplicates(arr){
     return arr.every(function(value){
       return arr.indexOf(value) === arr.lastIndexOf(value); 
    });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Dariusz', last:"Marko"}, 
        {title: "Instructor", first: 'Jan', last:"Hut", isCatOwner: true}, 
        {title: "Instructor", first: 'Mati', last:"Dobo"}, 
        {title: "Instructor", first: 'Maciek', last:"Wiczny", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
// the solution is: 
function hasCertainKey(arr, key){
     return arr.every(function(value){
       return key in value; 
    });
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Dariusz', last:"Marko"}, 
        {title: "Instructor", first: 'Jan', last:"Hut", isCatOwner: true}, 
        {title: "Instructor", first: 'Mati', last:"Dobo"}, 
        {title: "Instructor", first: 'Maciek', last:"Wiczny", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Dariusz') // false
    
*/

function hasCertainValue(arr, key, searchValue){
     return arr.every(function(value){
       return value[key] === searchValue; 
    });
}
