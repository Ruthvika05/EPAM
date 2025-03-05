let numbers = [];
function getUserNumbers() {
    let input = document.getElementById("userInput").value;
    numbers = input.split(',').map(num => parseInt(num.trim()));
    let filteredArray = filterEvenNumbers();
    document.getElementById("originalNumbers").innerHTML = 
        `Original Numbers: ${numbers.join(", ")}`;

    document.getElementById("result").innerHTML = 
        `Filtered Even Numbers: ${filteredArray.join(", ")}`;

    document.getElementById("count").innerHTML = 
        `Total Even Numbers: ${filteredArray.length}`;
}
function filterEvenNumbers() {
    return numbers.filter(num => !isNaN(num) && num % 2 === 0);
}
