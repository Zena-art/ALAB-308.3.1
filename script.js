//Part 1: Fizz Buzz


/**
 * Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
 */

let j;


for (let i = 1; i < 101; i++){
  if(i % 3 === 0 && i % 5 ===0 ){
    j = "Fizz Buzz";
    console.log(j)
  }else if(i % 3 === 0){
    j = "Fizz";
    console.log(j)
  }
  else if(i % 5 === 0){
    j = "Buzz";
    console.log(j);
  }else{
  console.log(i);
  }
}


console.log("===================== Part 2 ==============================")


// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.



// variable initilazation
let n = 967;
let isPrime = false; // this will be used to determine whether the current value of n is a prime number

while(!isPrime){ // loop continues to execute as long as isPrime is false.
  isPrime = true;
  n++;

  for(let i = 2; i <= n / 2; i++){ // this loop checks if number is divisible by i which is half of n at this point. 
    if(n % i === 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log("Next Prime Number is: " + n )
  }
}


// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.

console.log("===================== Part 3 ==============================")

const string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell = '';
let row = '';
let result = '';
let currentChar;

// Iterate through each character in the string
for (let i = 0; i < string.length; i++) {
    currentChar = string[i];

    if (currentChar === ',') {
        // Add a space between cells for readability
        row += cell.trim() + '  ';
        cell = ''; // Reset the cell
    } else if (currentChar === '\n') {
        // End the current row and add it to the result
        row += cell.trim(); // Add the last cell to the row
        result += row + '\n'; // Add the row to the result
        row = ''; // Reset the row
        cell = ''; // Reset the cell
    } else {
        // Accumulate characters for the cell
        cell += currentChar;
    }
}

// Add the last cell and row to the result
if (cell) {
    row += cell.trim();
}
if (row) {
}

// Output the processed data
console.log(result);
