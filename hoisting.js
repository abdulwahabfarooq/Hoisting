//Explain what hoisting is in JavaScript.
//Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. However, only the declarations are hoisted, not the initializations.

exampleHoisting(); //function is hoisted
function exampleHoisting (){
console.log("This is hoisting " + hoistedVariable); //It will return undefined because variable is hoisted
var hoistedVariable = 10;
}


console.log(myVar);
var myVar = 42; //It will return undefined


//FUNCTION DECLARATION
calledFunctionDeclaration(); //OUTPUT: IT will hoist the function
function calledFunctionDeclaration(){
    console.log("Function is declared and hoisted");
};


//FUNCTION EXPRESSION
try {
    notHoistedfunction();
} catch (error) {
    console.log("Error message with function hoisted", error.message);
}
var notHoistedfunction = function(){
    console.log("The function is not hoisted");
}