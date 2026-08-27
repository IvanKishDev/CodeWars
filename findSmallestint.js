// Given an array of integers your solution should find the smallest integer.


function findSmallestInt(arr) {
    let elem = arr[0];
    for (let i = 1; i < arr.length; i++){
    if (arr[i] < elem){
        elem = arr[i]
    }
    }
    return elem;
}