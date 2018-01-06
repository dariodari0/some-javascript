  /* Exercise about Advanced Array Methods from course on udemy website 
       
       map method
  
 1. creates a new array, 
 2. Iterates through an array, 
 3. Runs a callback func for each value in the array,
 4. Adds (pushes) the result of that callback func to the new array,
 5. Returns the new array
 
 Important: map always returns a new array of the same length
 
 How does look the map method?
 
 function map(arr, callback){
	 var newArr = [];
	 for( var i =0; i<arr.length; i++){
		 newArr.push(callback(arr[i], i, arr));
	 }
	 return newArr;
 }
 */
 /*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/
// the solution is: 
function doubleValues(arr){
    return arr.map(function(value){
		return value*2;
	});
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
// the solution is:
function valTimesIndex(arr){
    return arr.map(function(value, index){
		return value*index;
	});
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Dariusz'}, {name: 'Jan'}, {name: 'Mateusz'}, {name: 'Maciek'}], 'name') // ['Dariusz', 'Jan', 'Mateusz', 'Maciek']
*/
// the solution is:
function extractKey(arr, key){
    return arr.map(function(value){
		return value.name;
	});
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Dariusz', last:"Marko"}, {first: 'Jan', last:"Hut"}, {first: 'Mateusz', last:"Dobo"}, {first: 'Maciek', last:"Wiczny"}]) // ['Dariusz Marko', 'Jan Hut', 'Mateusz Dobo', 'Maciek Wiczny']
*/
// the solution is: 
function extractFullName(arr){
        return arr.map(function(value){
		return value.first+ " " +value.last;
	});
}
