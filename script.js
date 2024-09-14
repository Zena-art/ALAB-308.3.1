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