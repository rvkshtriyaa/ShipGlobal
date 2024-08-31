let secretNumber;
let attempts = 0;
const maxAttempts = 5;

function generateRandomNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function guessNumber() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (attempts > maxAttempts) {
        document.getElementById("result").textContent = "Game over! You've used all your attempts.";
        document.getElementById("result").style.color = 'red';
        document.getElementById("guessInput").disabled = true; 
        document.querySelector("button[onclick='guessNumber()']").disabled = true; 
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("result").textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
        document.getElementById("result").style.color = 'green';
        document.getElementById("guessInput").disabled = true; 
        document.querySelector("button[onclick='guessNumber()']").disabled = true; 
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent = "Your guess is too low. Try again.";
        document.getElementById("result").style.color = 'orange';
    } else {
        document.getElementById("result").textContent = "Your guess is too high. Try again.";
        document.getElementById("result").style.color = 'orange';
    }

    document.getElementById("attempts").textContent = "Attempts left: " + (maxAttempts - attempts);
}

function restartGame() {
    generateRandomNumber();
    attempts = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = "Attempts left: " + maxAttempts;
    document.getElementById("guessInput").value = '';
    document.getElementById("guessInput").disabled = false; 
    document.querySelector("button[onclick='guessNumber()']").disabled = false; 
}

generateRandomNumber();
