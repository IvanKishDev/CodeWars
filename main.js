



// const findLongestWord = function(str) {
//     let array = str.split(" ");
//     let max = 0;

//     for (let i = 0; i < array.length; i++){
//     if (array[i].length > max) max = array[i].length
//     }
//     return max
// }


// const findLongestWord = function(str) {
//     let maxLength = 0;
//     let currentLength = 0;

//     for (let i = 0; i < str.length; i++){
//         if (str[i] !== " "){
//             currentLength += 1;
//     } else if (str[i] === " ") {
//         if (currentLength > maxLength){
//             maxLength = currentLength
//             currentLength = 0
//         } 
//     }
//     if (currentLength > maxLength) maxLength = currentLength
// }
// return maxLength
// }



// const strings = ["hello", "world", "JS", "coding"]
    
// function stringsLength(str) {
// const newArray = [];

//     for (let i = 0; i < str.length; i++){
//         newArray.push(str[i].length)
//     }
// return newArray
// }

// console.log(stringsLength(strings));


// console.log(numbers.some(n => n > 30));



// console.log(words.every(x => x.length >= 2));




// console.log(nums.findIndex(x => x < 0));



// console.log(colors.shift());

// const uniqueNums = function(arr) {
//     const newNums = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!newNums.includes(arr[i])) newNums.push(arr[i])
// }
// return newNums
// }



// console.log(fruits.includes("apple"));







// functioncountOccurrences(words) {


//     return words.reduce((acc, word) => {
//         if(!acc[word]) {
//             acc[word] = 1 
//         } else {
//             acc[word]++
//         }
//         return acc
//     }, {})
    
// }




// function groupByLength(words) {
// const result = {};

// for (let word of words){
//     const wordLength = word.length
//     if (!result[wordLength]) result[wordLength] = []
//     result[wordLength].push(word)
// }
// return result
// }


// function groupByFirstLetter(words) {
//     let result = {};

//     for (let word of words) {
//         const firstLetter = word[0].toLowerCase()
//         if(!result[firstLetter]) result[firstLetter] = [];
//         result[firstLetter].push(word)
//     }
// return result
// }



