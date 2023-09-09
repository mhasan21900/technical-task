//Replace a substring with another substring in a string. Use a function

//creating a variable to store string to be replaced
let myString = " I want to become a web developer";

//creating a function to do the replacement
function replaceSubstring(str) {

    //holding new replaced string in  replacedSubstring 
    let replacedSubstring = myString.replace("web", "MERN Full Stack ");
     return replacedSubstring;
}

//calling the function with myString argument, 
//displaying before and after replacement of string
console.log("Before I joined TS4U, my wish was", myString);
console.log("After I joined TS4U, my goal is", replaceSubstring(myString));