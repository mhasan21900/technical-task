//Write a program that can find the total length of a string, use function

//Creating a function
function calculateStringLength(str) {

    //storing length of the string into nameLength variable
    const nameLength = str.length;

    //when called, it will return the stored value
    return nameLength;
  
  }
  //given my name
  const myName = "Muhammad";
  
  //outputting the size of the string length by calling
  //calculateStringLength function with myName arguments
  console.log(calculateStringLength(myName));