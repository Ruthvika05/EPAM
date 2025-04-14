function simulateError() {
    try {
        let result = divideNumbers(10, 0);
    } catch (error) {
        logError(error);
    }
}

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function logError(error) {
    const errorMessage = error.message;
    const errorTimestamp = new Date().toLocaleString();

    const errorObject = {
        message: errorMessage,
        timestamp: errorTimestamp
    };

    let errorLog = JSON.parse(localStorage.getItem('errorLog')) || [];
    errorLog.push(errorObject);

    localStorage.setItem('errorLog', JSON.stringify(errorLog));

    displayErrors();
}

function displayErrors() {
    const errorLog = JSON.parse(localStorage.getItem('errorLog')) || [];
    const errorLogList = document.getElementById('errorLogList');
    errorLogList.innerHTML = '';

    errorLog.forEach(error => {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message} (Logged at: ${error.timestamp})`;
        errorLogList.appendChild(li);
    });
}

document.getElementById('simulateErrorButton').addEventListener('click', simulateError);

displayErrors();
