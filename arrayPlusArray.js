// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    function arrSum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++){
            sum += array[i]
        }
        return sum
    }

    let arr1Sum = arrSum(arr1);
    let arr2Sum = arrSum((arr2));
    let newSum = arr1Sum + arr2Sum;
    return newSum
}