 /* Exercise: findIndex from course on udemy website */


/*findIndex returns the index of the first element in the array for which the callback returns a truthy value.  If no truthy values are returned, findIndex returns -1.*/

var arr = ["Javascript", "C++", "Python", "Django", "Go", "Ruby"];

findIndex(arr, function(str, index, array) {
    return str === "PHP";  // It returns -1
});

function findIndex(arr, callback) { // findIndex is a method that loops over our array and returns the index for the callback returns a truth value
  for (var i = 0; i < arr.length; i++) {  // check that truthiness
    if (callback(arr[i], i, arr)) {
      return i; // if that's true, should to returns our index
    }
  }
  return -1; // if never find the truth value here, should to return negative 1
}

