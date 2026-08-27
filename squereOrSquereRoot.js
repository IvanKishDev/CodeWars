function squareOrSquareRoot(array) {
   const newArr = []

   for (let i = 0; i < array.length; i++) {
     Number.isInteger(Math.sqrt(array[i])) ?  newArr.push(Math.sqrt(array[i])) : newArr.push(array[i] * array[i])
   }

    return newArr;
}