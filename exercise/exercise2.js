(function ()
{
    'use strict';

    window.exercise2 = {
        reverseNumber: function (number)
        {
			if (number < 0) return Math.abs(number);
			else if (number > 0) return -Math.abs(number);
			else return 0;
        },
        squareOrCube: function (array)
        {
			
			for (var i = 0; i < array.length; i++) {
					if (!(array[i]%2 == 0)) array[i] =  Math.pow(array[i], 2);
					else array[i] = Math.pow(array[i], 3);
				}
			return array;
        },
        replaceString: function (list, string, newString)
        {	
			 index = list.indexOf(string);
			 if(index===-1)return false;
			 else {
				for (var i = 0; i < list.length; i++) {
					if(list[i]===string) list[i] = newString;
				}
				return list;
			 }
        },
        maxArray: function (array)
        {	
			var flag = true;
			for (var i = 0; i < array.length; i++) {
					if (isNaN(array[i])) return flag = false;
				}
			if(flag){
				var max = array.reduce(function(a, b) {
					return Math.max(a, b);
				});
				return max;
			}
			else return false;
        },
        getObject: function (list, name)
        {
			for (var i=0; i<list.length; i++){
			var counter=0;	
			if(list[i].name===name){
				counter++;
				return list[i];
			  }
			}
			if(counter===0) return false;	
        }
    };
})();

/* Basic JavaScript Part II
Summary
This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks.
 You are supposed to implement functions having only the function name and purpose provided.

Goals
Your solutions should be placed inside app/exercise2.js file(inside window.exercise2 object).

reverseNumber(number)
It reverses digits in the number. If the parameter is not a number, it returns false.

squareOrCube(array)
It squares every odd number and cube every even number in array. It returns the update array of numbers.

replaceString(list, string, newString)
It searches the string in the list and replaces it to newString. 
It returns the corrected array or false (when the string doesn't exist).

maxArray(array)
It returns the maximal number from the array of numbers. If the array contains other elements than number, it returns false;

getObject(list, name)
It returns the object with the specified name from the list of objects. If there are no such object on the list, it returns false.

*/
