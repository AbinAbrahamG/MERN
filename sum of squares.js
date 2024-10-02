function sumOfSquares(arr) {
    if (arr.length === 0) {
        console.log('Empty Array');
    }

    return arr.reduce((sum, num) => {
        if (typeof num !== 'number') {
            console.log('All elements must be numbers');
        }
        return sum + num * num;
    }, 0);
}

const array = [7, 9, 13, 17];
console.log(sumOfSquares(array));
