/*******************************************************************************************/
*  version v0.0                                                                             *
*  author: Rammurthy                                                                        *
*  reference: Mozilla Developer Network                                                     *
*  ref_link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
*********************************************************************************************/

function newKeyword() { 
   if (arguments.length) {  
      var functionName = arguments[arguments.length - 1]; 
      [].pop.call(arguments); 
      var args = arguments;
	   console.log('arguments ', args);
      var object = {}; // create brand new object 
      functionName.apply(object, args); // call the function with passed arguments in the scope of object 
      return object; // return object into variable 
   } else { //do nothing 
   } 
}
