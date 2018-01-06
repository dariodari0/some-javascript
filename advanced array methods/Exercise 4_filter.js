  /* Exercise: filter from course about Advanced Array Methods on udemy website.
   
    filter method
	
 1. creates a new array, 
 2. Iterates through an array, 
 3. Runs a callback func on each value in the array,
 4. If the callback func returns true, that val will be added to the new array,
 5. If the callback func returns false, that val will be ignored from the new array,
 6. Returns the new array with value which has a true return from callback func.
 
 Important: The result of the callback will always be a boolean.
 
 How does look the filter method?

 function filter(array, callback){
	var newArr = [];
	for(var i =0; i < array.length; i++){
		if(callback(array[i], i, array){
			newArr.push(array[i]);
		}
	}
	return newArr;
}
  */
  /*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Dariusz', last:"Marko"}, {first: 'Jan', last:"Hut", isCatOwner: true}, {first: 'Mati', last:"Dobo"}, {first: 'Maciek', last:"Wiczny", isCatOwner: true}], 'isCatOwner') 
	// [{first: 'Jan', last:"Hut", isCatOwner: true}, {first: 'Maciek', last:"Wiczny", isCatOwner: true}]
*/
//the solution is:
function filterByValue(arr, key){
    return arr.filter(function(value){
	  return value[key] !== undefined;
	});
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/
//the solution is:
function find(arr, searchValue){
    return arr.filter(function(value){
		return value === searchValue;
	})[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Dariusz', last:"Marko"}, {first: 'Jan', last:"Hut", isCatOwner: true}, {first: 'Mati', last:"Dobo"}, {first: 'Maciek', last:"Wiczny", isCatOwner: true}], 'isCatOwner',true)
	// {first: "Jan", last: "Hut", isCatOwner: true}
       {first: "Maciek", last: "Wiczny", isCatOwner: true}
*/
//the solution is:
function findInObj(arr, key, searchValue){
    return arr.filter(function(value){
		return value[key] === searchValue;
	})[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Dariusz') // ('drsz')
    removeVowels('Jan') // ('jn')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
//the solution is:
function removeVowels(str){
     var vowels = "aeiou";
	 return str.toLowerCase().split("").filter(function(value){
		return vowels.indexOf(value) === -1; 
	 }).join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/
//the solution is:
function doubleOddNumbers(arr){
    return arr.filter(function(value){
		return value % 2 !== 0;
	}).map(function(value){
		return value*2;;
	)}
}
