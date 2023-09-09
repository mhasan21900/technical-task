//Write a program that can convert a string use a function



//randomly choosing a number 
let myNum = 2045;

//created that variable to store number as string 
let convertedString; 

//in this function, gets the convertedString argument
//convert 2045 into string 
function stringConvertion(str) {
     convertedString = myNum.toString();
    return convertedString;

}
//outputs 2045 as string not number
console.log(" I am just a number: ", myNum);
console.log("After conversion I am a string now: ", stringConvertion(convertedString));