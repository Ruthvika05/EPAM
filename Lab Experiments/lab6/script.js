let numbers = []; // Global array to store user-defined numbers

// Function to get user input and filter even numbers
function getUserNumbers() {
    let input = document.getElementById("userInput").value;
    
    // Convert input string to an array of numbers
    numbers = input.split(',').map(num => parseInt(num.trim()));

    // Call function that filters even numbers
    let filteredArray = filterEvenNumbers();

    // Display original numbers, filtered numbers, and count
    document.getElementById("originalNumbers").innerHTML = 
        `Original Numbers: ${numbers.join(", ")}`;

    document.getElementById("result").innerHTML = 
        `Filtered Even Numbers: ${filteredArray.join(", ")}`;

    document.getElementById("count").innerHTML = 
        `Total Even Numbers: ${filteredArray.length}`;
}

// Function that filters even numbers (without parameters)
function filterEvenNumbers() {
    return numbers.filter(num => !isNaN(num) && num % 2 === 0);
}
