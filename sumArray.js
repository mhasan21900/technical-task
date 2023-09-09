//Write a program that can sum an array elements of [2, 5, 7, 8]


//created an Array with given values
let anArray = [2, 5, 7, 8];


//sum variable needed to hold the total amount while looping taking place
let sum = 0;


//I am iterating through the loop elements and adding their value to sum
for ( i = 0; i < anArray.length; i++) {
    sum += anArray[i];
}

//finally outputting the sum of all elements combined
console.log(" The total value of this array element is: " + sum);


