function newKeyword(args, functionName) {
   var object = {}; // create brand new object
   functionName.call(object, args); // call the function with passed arguments in the scope of object
   return object; // return object into variable
}
