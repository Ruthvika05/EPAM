function reverseNumber(num) {
    let isNegative = num < 0;
    let reversedString = Math.abs(num).toString().split('').reverse().join('');
    let reversedNumber = parseInt(reversedString) * (isNegative ? -1 : 1);
    
    return reversedNumber;
}
function reverseInput() {
    let inputNumber = document.getElementById('number').value;
    let result = reverseNumber(parseInt(inputNumber)); // Convert input to integer
    document.getElementById('result').innerText = result;
}
console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(-56789)); // Output: -98765
console.log(reverseNumber(100));    // Output: 1
console.log(reverseNumber(-9050));  // Output: -509
