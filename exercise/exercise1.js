(function ()
{
    'use strict';

    window.exercise1 = {
        getDescendingNumbers: function (numberFrom, numberTo)
        {
			if(numberFrom > numberTo) return false;
			else if (isNaN(arguments)) return false;
			else return Array((numberTo+1)-numberFrom).fill().map((e,i)=>i+numberFrom).join(' ');
        },
        deleteString: function (string, array)
        {
			return array.filter(e => e !== string).toString();

        },

        stringCounter: function (array)
        {
			var counter = 0;
			for (var i = 0; i < array.length; i++) {
					if (isNaN(array[i])) counter++;
				}
			return counter;
        },

        squareOdd: function (array)
        {
			for (var i = 0; i < array.length; i++) {
					if (!(array[i]%2 == 0)) array[i] = array[i]*2;
				}
			return array;
        },

        areaOfTrapezoid: function (a, b, h)
        {
			if (arguments.length < 3 && a <=0 || b <=0 || h<=0 ) return false;
			else return ((a + b) / 2) * h;
        }
    };
})();

/* Basic JavaScript Part I
Summary
This is JS Assessment for basic JavaScript knowledge. The exercise consists of a few simple tasks.
 You are supposed to implement functions, having only the function name and purpose provided.

Goals
Your solutions should be placed inside app/exercise1.js file(inside window.exercise1 object).

getDescendingNumbers(numberFrom, numberTo)
	It returns a string with numbers in the descending order and separated by ' ' (space). 
	If the numberFrom is lower than the numberTo , it returns false. If the parameters aren't numbers, it should also return false.

deleteString(string, array)
	It removes all the occurrences of the string in an array of strings. It returns the update array of strings.

stringCounter(array)
	It returns a number of String elements in the array.

squareOdd(array)
	It squares the value of every odd number inside the array. It returns an update array and leaves the rest of items unaffected.

areaOfTrapezoid(a,b,h) 
	It calculates the area of a trapezoid. If the parameters are incorrect the function should return false.*/
