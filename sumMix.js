// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


function sumMix(x){
let sum = 0;
    for (i = 0; i < x.length; i++){
    if(typeof x[i] === "string"){
        x[i] = Number(x[i]);
        sum += x[i];
    } else {
        sum += x[i];
    }
    }
    return sum
}