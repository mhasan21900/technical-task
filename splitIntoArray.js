//Write a program that splits a string into an array of substrings based on a seperator. 
//Use a function


//creating a function called splitString
function splitString (str) {

    //creating another variable to store the splitted arrays
   let splittedString = str.split(" ");
   return splittedString;
}
//outputting the arrays by calling splitString fuction with a argument
console.log(splitString("TS4U Is The Best Bootcamp ever!"));