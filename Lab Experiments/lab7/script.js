const sampleArray = [10, -5, 23, 0, -42, 8, 17, 4];
function filterArray(arr, conditionFunction) {
    return arr.filter(conditionFunction);
}

const positiveNumbers = filterArray(sampleArray, num => num > 0);
console.log("Positive Numbers:", positiveNumbers);

const evenNumbers = filterArray(sampleArray, num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const greaterThanTen = filterArray(sampleArray, num => num > 10);
console.log("Numbers Greater Than 10:", greaterThanTen);

const negativeNumbers = filterArray(sampleArray, num => num < 0);
console.log("Negative Numbers:", negativeNumbers);
