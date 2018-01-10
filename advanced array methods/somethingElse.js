// TWO TO ONE SORTED STRING, containing distinct letters
	
function longest(s1, s2) {
  var str = s1.concat(s2);
  str = str.split("").sort().filter(function(letter,i,array){
	  return letter != array[i-1];
  });
  return str.join("");
}


//Refactor: This code do the same thing like above code:  

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('') - its ECMA2015+

//Another, solution is : 
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

##################################################################################3

function solution(number){
var sumMultiples = 0;
  for(sumMultiples; --number > 2;){
   sumMultiples = !(number%3) || !(number%5) ? sumMultiples + number : sumMultiples;
  }
  return sumMultiples;
}

Or : 
function solution(number){
  var sum = 0;
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

####################################################################################
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow(numbers){
  numbers = numbers.split(" ").map(Number);
return Math.max.apply(null,numbers) +" "+ Math.min.apply(null,numbers);
}

####################################################################################
//Implement a function that determines whether a string that contains only letters is an isogram.
//Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  str = str.toLowerCase().split("");
 return str.every(function(value){
       return str.indexOf(value) === str.lastIndexOf(value); 
    });
}

//Or, this is possible to do this way (regex) :
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
//Or using set
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

#######################################################################################
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers.
//No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b) { return a - b; });
  return numbers[0]+numbers[1];
};

#########################################################################################
function descendingOrder(n){
  n = n.toString().split("")
  .sort(function(a,b){return b-a})
  .join("");
  return n;
}
