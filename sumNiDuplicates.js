


// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.





function sumNoDuplicates(numList) {

    const count = {}
    let sum = 0

    for (let i = 0; i < numList.length; i++) {
        const num = numList[i]
        count[num] = (count[num] || 0) + 1
    }


        for (let i = 0; i < numList.length; i++) {
            if (count[numList[i]] === 1) {
                sum += numList[i]
            }
        }
    
    return sum
}

function sumNoDuplicates(arr) {
        let uniqueArr = [];
        let sum = 0;
        arr.forEach(num => {
            if (arr.indexOf(num) === arr.lastIndexOf(num)) {
                uniqueArr.push(num);
                sum += num;
            }
        });
        return sum;
}