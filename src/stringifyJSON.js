// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var stringified = '';
  
  if (typeof obj === 'object' && obj !== null){
    if((obj.hasOwnProperty('undefined') & obj['undefined'] === undefined) || (obj.hasOwnProperty('functions') & obj['functions'] === (function () {}))) {
  	  stringified = stringified + '{}';
  	  return stringified;
  	}
  }

  if ( obj === undefined || typeof obj === function() {} ) {
    return stringified;  
  }

  else if (typeof obj === 'string') {
  	return stringified.concat('"' + String(obj) + '"');
  }

  else if (typeof obj ==='number' || typeof obj === 'boolean' || obj === null) {
  	return stringified + String(obj);
  }

  else if(Array.isArray(obj)) {
  	
    stringified = stringified + "[";

    for ( var index = 0; index < obj.length; index++) {
      stringified = stringified + (stringifyJSON(obj[index]));

      if ( index < (obj.length-1)) {
      	stringified = stringified + (',');
      }
    }

    stringified = stringified + (']');

    return stringified;

  }
  
  else if (typeof obj === 'object') {
    stringified = stringified + ('{');
    var keys = Object.keys(obj);
    
    for ( var index = 0; index < keys.length; index++) {
      stringified = stringified + (stringifyJSON(keys[index]));
      stringified = stringified + (':');
      stringified = stringified + (stringifyJSON(obj[keys[index]]));
      if (index < (keys.length-1)){
      	stringified = stringified + (',');
      }
    }
    
    stringified = stringified + ('}');
    return stringified;

  }
}















//cut starts here 
/*

  //how to read something that is not a string?
  //only booleans, numbers, and arrays are converted + plus arrays, objects

  //simple stuff first

  //remember that 1 or 0 can be considered truthy or falsy - this will mess the boolean result
  //so numbers will need to take priority
  
  //do I need an array check or can I just work with objects?
  
  //I know if array or object

  //object
  //clone the object so as not to affect the original

  //check if array or if object, need to know in order to put parenthesis or brackets


  //take first item in object using the hasOwnproperties or keys
  // check to see what the key is, check to see what the value is
  // if value is a basic type, turn to string
  //otherwise, call the function again on the value - this will go deeper until you finally reach
  // a basic value
  //need to remove that value from the object so I know the process has been completed
  //keep adding to the string


//array
  //[1,2,3]
  //if I know it's an array, start the string with a parenthesis 
  //I can just take each element, pop them off the array, add to the string and call the function 
  //until the index in undefined, then add on the last parenthesis

  
console.log('obj: ' + obj)


//DETAIL WORK - need to figure out how to include commas for the objects, and the beginning brackets

  //how to I get rid of items?  do I remove them from the array or the object?
  var stringified = '';

  if (typeof obj === 'string' || typeof obj ==='number' || typeof obj === 'boolean') {
  	return stringified + String(obj);
  }

  else if(Array.isArray(obj)) {
  	//Array can be filled wiht objects...
  	//need a method to determine if the array is new or not?  did I just start the recursion?
  	if (obj[1] !== undefined) {
  		var slicedArray = obj.slice(1, obj.length);
  		console.log('slicedArray: ' + slicedArray);

  		return stringified + stringifyJSON(obj[0]) + ',' + stringifyJSON(slicedArray);
  	}
  	else {
  		console.log('end')
  		return stringified + (stringifyJSON(obj[0]) + ']');
  	}
  }
  
  else if (typeof obj === 'object') {
    stringToReturn = '';
    var keys = Object.keys(obj);
    if (keys.length !== 0) {
      var firstKey = keys[0];
      var firstValue = obj[keys[0]];
      delete obj[firstKey];
      stringToReturn = stringified + '{' + stringifyJSON(firstKey) + ':' + stringifyJSON(firstValue) 
      var reducedKeys = Object.keys(obj);
        if (reducedKeys.length !== 0) {
        	return stringToReturn + ',' + stringifyJSON(obj);
        }
        else {
        	return stringToReturn + '}';
        }
      //when to add the comma and the extra values?
      //only add comma when you know there are more keys, otherwise, just call the function and the bracket will be added
    }
  }

  //do not go through each of the array
  //push the whole array as a string
  //figure out how to insert the entire array or object - into the string


  //needs to either go front to back while slicing?

  //needs to pop from back to front
  //use str.length - 1 to find the last index, if length is 0, then index of -1 is undefined? or is this an error

  //base case
  /*
  if (json[index] === undefined) {

  }
  */

//Undo this as well 
/*  
};

//undo
*/
