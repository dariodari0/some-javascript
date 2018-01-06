  /* Exercise about Advanced Array Methods from course on udemy website 
      
      forEach array method

Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]


function doubleValues(arr){
     var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}
*/
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
        var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['dariusz','mateusz', 'jan', 'udemy']) // ["dz", "mz", "jn", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1]);
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable 

Examples:
    addKeyAndValue([{name: 'Dariusz'}, {name: 'Jan'}, {name: 'Jan'}, {name: 'Maciek'}], 'title', 'instructor') 
    
    // [{name: 'Dariusz', title:'instructor'}, {name: 'Jan', title:'instructor'}, {name: 'Jan', title:'instructor'}, {name: 'Maciek', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
     arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of Janes the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Dariusz') // {a: 1, i: 1, u: 1};
    vowelCount('Jan') // {a:1};
    vowelCount('Jan') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
       var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
