// Fix the sort() method for arrays here.



const arraySort = (array) => {
    const sorted = [...array];

    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }

    return sorted;
};