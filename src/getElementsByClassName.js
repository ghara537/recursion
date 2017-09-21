
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
    
   var findElementsbyClassRecursively = function (className, activeHTMLNode){
   	var elementsOfClass = [];
   	var HTMLChildrenNodes = activeHTMLNode.children
    if ( activeHTMLNode.className.includes(className)){
    	elementsOfClass = elementsOfClass.concat(activeHTMLNode);
    }
    
   	if (HTMLChildrenNodes === undefined) {
   	  	return elementsOfClass; 
   	}
   	else {
   	  for (var index = 0; index < HTMLChildrenNodes.length; index++){
   	  	  elementsOfClass = elementsOfClass.concat(findElementsbyClassRecursively(className, HTMLChildrenNodes[index]))
   	  	}
   	  }
      return elementsOfClass;
    }


	var elementsOfClass = [];
	if (document.body.className.includes(className)) {
		var bodyWithElementName = document.getElementsByTagName('body')[0];
		elementsOfClass = [bodyWithElementName];
	}

	var activeHTML = document.body.children;
	for (var index = 0; index < activeHTML.length; index++) {
      elementsOfClass = elementsOfClass.concat(findElementsbyClassRecursively(className, activeHTML[index]));
	}
    return elementsOfClass; 


    
}	





/******************ATTEMPT 3************************/
/*

var getElementsByClassName = function(className) {
    
   var findElementsbyClassRecursively = function (className, activeHTML, index){
   	var elementsOfClass = [];
   	//console.log('index: ' + index);
    if (index >= activeHTML.length){
    	//console.log('Length of array: ' + elementsOfClass.length);
    	return elementsOfClass;
    }
    else if (index < (activeHTML.length)){
    	//console.log('HTML List1: ' + activeHTML[index]);
    	console.log('element className: ' + activeHTML[index].className)
    	//console.log('className: ' + className);
    	//console.log('className comparison: ' + (activeHTML[index].className === String(className)))
    	if (activeHTML[index].className.includes(className)){  
    	  //console.log('element List in loop: ' + activeHTML[index]);	
    	  elementsOfClass = elementsOfClass.concat(activeHTML[index]);
    	  console.log('element className2: ' + activeHTML[index].className)
          //console.log('Array Length Updates: ' + elementsOfClass.length)
    	}
      index = index+1;
      elementsOfClass = elementsOfClass.concat(findElementsbyClassRecursively(className, activeHTML, index));
      console.log('element className3: ' + activeHTML[index-1].className)
      return elementsOfClass;
    }
   }

    //does not account for multiple bodies
	var elementsOfClass = [];
	console.log('search for className: ' + className)
	if (document.body.className.includes(className)) {
		var bodyWithElementName = document.getElementsByTagName('body')[0];
		elementsOfClass = [bodyWithElementName];
	}
	var activeHTML = document.body.children;
	//console.log('HTML List START length: ' + activeHTML.length);
	//console.log('HTML List1: ' + activeHTML[1]);
	//console.log(document.body.children[0].id)
	var index = 0;
	//console.log('index: ' + index);
	//console.log('activeHTML id for index0: ' + activeHTML[0].id)
	//console.log('activeHTML Classname for 1: ' + activeHTML[1].className)
	elementsOfClass = elementsOfClass.concat(findElementsbyClassRecursively(className, activeHTML, index));
    console.log('element className4: ' + activeHTML[1].className)
    console.log('finished')
    return elementsOfClass; 


    
}	
*/
/********************END ATTEMPT 3*******************/



/******ATTEMPT 2***********/
/*
var getElementsByClassName = function(className, //may need doc if using v1
) {
  
var findElementsbyClassRecursively = function(className, index) {
  
  var elementsOfClass = [];
  if (elementList.length !== 0) {
    for ( var index = 0; index < elementList.length; index++) {
      if ( elementList[index].className === className) {
      	elementsOfClass.push(elementList[index]);

      	console.log('elementList: ' + elementList)

      	console.log('elementList: ' + elementList[0])
      	console.log('elementList: ' + elementList[1])
      	console.log('elementList: ' + elementList[2])
      	
        var elementsRemaining = elementList.slice(index, elementList.length);

        console.log('elements Remaining: ' + elementsRemaining);

        elementsOfClass.concat(findElementsbyClassRecursively(className, elementsRemaining));

        console.log('elementsOfClass: ' + elementsOfClass);

        return elementsOfClass;
      }
    }
  }
  return elementsOfClass;
  
}

//I will be building an array of the matching elements
var elementsOfClass = [];
//need to access all of the elements within the doc
var elementList = document.body.children;
//Look through the list until finding an element with matching class
//once one is found, slice the list for passing into the recursion function
//base case should be element list of length 0

findElementsbyClassRecursively(className, elementList)


//recurse function will return the array of matching elements
//each recurse will concatenate the returning arrays

return elementsOfClass;


}
*/
/*********END ATTEMPT2**********/



/*



  {
  var findType = function(elementString) {
  	console.log('in find type')
  	console.log('inFindType' + elementString)
    //there will always be a type
    var endTypeIndex = elementString.indexOf(" ");
    
    console.log('inFindType EndIndex ' + endTypeIndex)
    //WHY IS THIS 2 FOR THE SUBSTRING TO GET RID OF THE - THERE IS A WHITE SPACE ISSUE
    var typeName = elementString.substring(2, endTypeIndex);
    console.log('typeName: ' + typeName)
    
    
  	return typeName;
  }

  var findID = function(string){
  	console.log('in find ID')
  	var IDName = '';
    var startIDIndex = string.indexOf('id');
    if (startIDIndex !== -1) {
      endIDIndex = string.substring(startIDIndex + 3, string.length).indexOf('"');
      IDName = '#' + string.substring(startIDIndex,endIDIndex);
    }


    return IDName;
  }



  //check for a <
  //close off at the >
  
  //check within the < > for the class sign, if it's available, 
  //create a new doc with all of the top sliced off
  //look for type, ID and then class of the element
  //recursive check by cutting out lines as you go and adding to the list you make, push items
  //base case is end of document

  //is the document considered one large string?
  if (doc === undefined){
  	//var docString = String(document.body)
  	var docString = document.getElementsByTagName('html')[0].innerHTML
  }
  else {
  	var docString = doc;
  }
  
  //console.log(docString);
  //console.log(docString.substring(0,40));
  //console.log(docString.substring(10,20));
  //console.log(docString.substring(20,30));
  //console.log(docString.length);
  
  var elementArray = [];
  var classNameActual = '';
  var iDNameActual = '';
  var typeNameActual = '';
  for (var index = 0; index < docString.length; index++) {
    if (docString[index] === '<') {
    	for (var endIndex = index; endIndex < docString.length; endIndex++) {
    		if (docString[endIndex] === '>'){

    			//console.log('begin to end ' + index + ' ' + endIndex)
    			//make substring and find the class string within if available
    			var elementString = docString.substring(index, endIndex+1);
                
                var classStartIndex = elementString.indexOf('class');
               

    			if (classStartIndex !== -1){

                  console.log('elementString: ' + elementString);
    			
    			  console.log('!!!classStartIndex: ' + classStartIndex);
    			  console.log('ClassName Length' + className.length);
    			  console.log('className: '+ elementString.substring(classStartIndex+7, classStartIndex + 7 + className.length));
    			  console.log('className Input ' + className);
    			  console.log('className Check: ' + (elementString.substring(classStartIndex+7, classStartIndex + 7 + className.length)) === className);
    			  console.log('className Input type ' + typeof className);
    			  console.log('className type ' + typeof elementString.substring(classStartIndex+7, classStartIndex + 7 + className.length));
                  console.log('className Actual Length ' + elementString.substring(classStartIndex+7, classStartIndex + 7 + className.length).length);
                
                  var classNameInDoc = String((elementString.substring(classStartIndex+7, classStartIndex + 7 + className.length)));
                
                  console.log("COMPARE");
                  console.log("classNameInDoc: " + classNameInDoc );
                  console.log('className Input ' + className);
                  console.log("in doc type: " + typeof classNameInDoc);
                  console.log("Input type: " + typeof className);
                  console.log('Second ClassName Comp Check: ' + (classNameInDoc === className));
               
                  var trial1 = new String(classNameInDoc).valueOf()
                  var trial2 = new String(className).valueOf() 
               
                  console.log("trial1: " +trial1);
                  console.log("trial2: " +trial2);

                  console.log('comp: ' + (trial1 === trial2) );
                //return [trial1, trial2, classNameInDoc, className];

    				if ( classNameInDoc === className){
    					//find ID
    					console.log("found");
    					console.log('elementString: ' + elementString);
    					console.log('findType' + findType(elementString))
    					console.log('findID' + findID(elementString))



    					var elementTitle = findType(elementString) + findID(elementString) + '.' + className; 
    					console.log('elementTitle: ' + elementTitle)

    					console.log('ElementTitle: ' + elementTitle)
    					//find type
    					//find 
    					//put together to make element name
    					//call function again with cut string
    					var remainingDoc = docString.substring(endIndex, docString.length)
    					console.log('remainingDoc: '+ remainingDoc);
    					elementArray.push(elementTitle);
    					console.log('elementArray: ' + elementArray)
    					return elementArray.concat(getElementsByClassName(className, remainingDoc))

    				}

    				//var secondQuotationSearch = classStartIndex.substring(7,classStartIndex.length);
    				//var classStringEndIndex = secondQuotationSearch.indexOf('"');
                    
    			}
    		  index = endIndex+1;
    		}
    	}
    }
  }
  
  




};


*/
