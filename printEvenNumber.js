//Write a program that can print even numbers from 1 to 100


//lets have a variable that holds 100
let oneHundred = 100;

//iterates from 0 to 100 and continues to check 
//if i is less than or equal to 100
for (i = 0; i <= oneHundred; i++) {

    //In each iterate this check whether the 
    //value of i is even number
    if(i % 2 == 0) {
        console.log(i);
    }
}
