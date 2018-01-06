    /* Exercise about Advanced Array Methods from course on udemy website 
       
	  reduce method

	  1. Accepts a callback func and an optional second parameter.
	  2. Iterates through an array.
	  3. Runs a callback on each value in the array.
	  4. The first parameter to the callback is either the first value in the array or the optional second parameter.
	  5. The first parameter to the callback is often called "accumulator".
	  6. The returned value  from the callback becomes the new value of accumulator.
 	
	  
	   Important:  whatever is returned from the callback func, becomes the new value of the accumulator.
	   
	    How does look the some method?
		
		array.reduce(function(accumulator, nextValue, index, array){
			whatever is returned inside here, will be the value of accumulator in the next iteration.
		}, optional second parameter);
		
		Example:
		var arr = [1,2,3,4,5,6,7,7]; 
		arr.reduce(function(acc,nextValue){
			return acc + nextValue; // iterations:  1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21, 21+7=28, 28+7=35 <-- that is the result in this case. 
		});
		
		Example with second parameter:
		var arr = [1,2,3,4,5,6,7,7]; 
		arr.reduce(function(acc,nextValue){
			return acc + nextValue; // iterations:  5+1=6, 6+2=8, 8+3=11, 11+4=15, 15+5=20, 20+6=26, 26+7=33, 33+7=40 <-- that is the result in this case. 
		},5);
		
		Example with strings:
		
		var names = ['Dariusz', 'Jan', 'Mati', 'Maciek'];
		names.reduce(function(acc,nextValue){
		return acc += " " + nextValue; // iterations: 'My friend are'+'Dariusz' = 'My friends are Dariusz', 'My friends are Dariusz' + 'Jan' = 'My friends are Dariusz Jan' .. etc.
		},'My friends are');
		
		Example with objects:
		
		var arr = [3, 4, 1, 4, 5, 3];
		arr.reduce(function(acc,nextValue){
			if (nextValue in acc){
				acc[nextValue]++; // value incrementation if exist (return true)
			} else {
				acc[nextValue] = 1; // value equal 1 if not exist (return false)
			}
			return acc; // returned {1: 1, 3: 2, 4: 2, 5: 1} with the ascending order in this case. 
		},{});
		
		Example using this method in a function:
		
		function sumOddNumbers(arr){
			return arr.reduce(function(acc, nextValue){
				if(nextValue % 2 !== 0){
					acc += nextValue;
				}
				return acc;
			},0);
		}
		
	*/
	/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Dariusz'}, {name: 'Jan'}, {name: 'Mati'}, {name: 'Maciek'}]
    extractValue(arr,'name') // ['Dariusz', 'Jan', 'Mati', 'Maciek']
*/
// The solution is: 
function extractValue(arr, key){
    return arr.reduce(function(acc, nextValue){
        acc.push(nextValue[key]);
		return acc;	
    },[]);
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of Janes the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Dariusz') // {a: 1, i: 1, u: 1};
    vowelCount('Jan') // {i:1};
    vowelCount('Mati') // {a: 1, i: 1};
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
// The solution is: 
function vowelCount(str){
	var splitAndLowerStr = str.toLowerCase().split('');
    var vowels = "aeiou";
	
    return splitAndLowerStr.reduce(function(acc, nextValue){
        if(vowels.indexOf(nextValue) !== -1){
            if(acc[nextValue]){
                acc[nextValue]++;
            } else {
                acc[nextValue] = 1;
            }
        }
        return acc;
    }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Dariusz'}, {name: 'Jan'}, {name: 'Mati'}, {name: 'Maciek'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        0: {name: "Dariusz", title: "Instructor"};
		1: {name: "Jan", title: "Instructor"};
		2: {name: "Mati", title: "Instructor"};
		3: {name: "Maciek", title: "Instructor"};
      ]
*/
// The solution is:
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, nextValue, index){
		acc[index][key] = value;
		return acc;
	},arr);
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Dariusz', 'Maciek', 'Jan', 'Mati'];
    
    partition(names, isLongerThanThreeCharacters) // ["Dariusz", "Maciek", "Mati"],["Jan"];
*/
// The solution is: 
function partition(arr, callback){
    return arr.reduce(function(acc, nextValue){
		if(callback(nextValue)){
			acc[0].push(nextValue);
		} else {
			acc[1].push(nextValue);
		}
		return acc;
	},[[],[]]);
}
	
