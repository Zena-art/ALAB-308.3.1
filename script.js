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

let n = 180;
let isPrime = false;

while(!isPrime){
  isPrime = true;
  n++;

  for(let i = 2; i < n / 2; i++){
    if(n % i === 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log("Next Prime Number is: " + n )
  }
}