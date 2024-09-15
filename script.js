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


// for (let i = 1; i < 101; i++){
//   if(i % 3 === 0 && i % 5 ===0 ){
//     j = "Fizz Buzz";
//     console.log(j)
//   }else if(i % 3 === 0){
//     j = "Fizz";
//     console.log(j)
//   }
//   else if(i % 5 === 0){
//     j = "Buzz";
//     console.log(j);
//   }else{
//   console.log(i);
//   }
// }

//Declare an arbitrary number, n.
//Create a loop that searches for the next prime number, starting at n and incrementing from there.
//As soon as you find the prime number, log that number and exit the loop.



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