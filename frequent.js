function mostFrequentItem(arr) {
    if (arr.length === 0) {
        console.log('Empty Array');
    }

    const frequencyMap = {};
    let mostFrequent = arr[0];
    let maxCount = 0;

    for (let item of arr) {
        if (frequencyMap[item] != null) {
            frequencyMap[item]++;
        } else {
            frequencyMap[item] = 1;
        }

        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}

const array = [3, 7, 3, 2, 9, 3, 7, 7, 7, 2];
console.log(mostFrequentItem(array));
