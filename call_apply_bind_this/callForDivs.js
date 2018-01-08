document.addEventListener('DOMContentLoaded', function() {
  console.info(whichDivHasSpecificText());  //returns (5) [div, div, div, div, div]
}, true);


 function whichDivHasSpecificText(){
 
 //divs is not an array, it's an array like object so filter method won't work
	var divs = document.getElementsByTagName('div');
	 
 //So, if we want to find all the tics that have the text "Hello", we should to make copies of arrays by using silce method
 
 // Let's use the slice method on arrays, but instead of the target of slice (the keyword this) being that array, let's set the 
 // target of the keyword 'this' to be our divs array-like-object
 
	var divsArray = [].slice.call(divs); // also: Array.prototype.slice.call(divs); should do the same thing
	
	return divsArray.filter(function(value){
		return value.innerText === 'Hello'; //In JS, slice will not work on all data types, but it works very well on array-like-objects
	 });
	 
	 
}

