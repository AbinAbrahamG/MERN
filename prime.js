function Prime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log('Empty Array');
    }
    const firstElement = arr[0];
    if (typeof firstElement !== 'number' || !Number.isInteger(firstElement)) {
        console.log('First element not an integer');
    }
    return Prime(firstElement);
}

const array = [17, 15, 5];
console.log(checkPrime(array));
