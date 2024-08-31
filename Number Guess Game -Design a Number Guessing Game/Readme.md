<!DOCTYPE html>: Declares the document as HTML5.
<html lang="en">: Sets the language of the document to English.
<head>: Contains metadata and links:
<meta charset="UTF-8">: Specifies character encoding as UTF-8.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures responsive design on mobile devices.
<title>Number Guessing Game</title>: Sets the document's title.
<link rel="stylesheet" href="style.css">: Links to the external CSS file for styling.
<body>: Contains the main content of the document:
<div class="dialog-box">: Main container for the game interface.
<h1>Number Guessing Game</h1>: Title of the game.
<p>Guess a number between 1 and 100:</p>: Instructions for the player.
<div class="input-container">: Container for the input field and button.
<input type="number" id="guessInput" min="1" max="100" placeholder="Enter number">: Input field for the player's guess.
<button onclick="guessNumber()">Guess</button>: Button to submit the guess, calling the guessNumber function.
<p id="result"></p>: Displays the result of the guess.
<p id="attempts">Attempts left: 5</p>: Displays the number of attempts left.
<button onclick="restartGame()">Restart</button>: Button to restart the game, calling the restartGame function.
<script src="script.js"></script>: Links to the external JavaScript file for functionality.
JavaScript
let secretNumber;: Declares a variable to hold the secret number.
let attempts = 0;: Initializes the number of attempts.
const maxAttempts = 5;: Sets the maximum number of attempts allowed.
function generateRandomNumber() { ... }: Generates a random number between 1 and 100 and stores it in secretNumber.
function guessNumber() { ... }: Handles the guessing logic:
const guess = parseInt(document.getElementById("guessInput").value);: Retrieves and parses the player’s guess.
attempts++;: Increments the attempt count.
if (attempts > maxAttempts) { ... }: Checks if the maximum attempts are exceeded, ends the game if true.
if (guess === secretNumber) { ... }: Checks if the guess is correct, displays a success message if true.
else if (guess < secretNumber) { ... }: Provides feedback if the guess is too low.
else { ... }: Provides feedback if the guess is too high.
document.getElementById("attempts").textContent = "Attempts left: " + (maxAttempts - attempts);: Updates the number of attempts left.
function restartGame() { ... }: Resets the game:
generateRandomNumber();: Generates a new secret number.
attempts = 0;: Resets the attempt count.
document.getElementById("result").textContent = "";: Clears the result message.
document.getElementById("attempts").textContent = "Attempts left: " + maxAttempts;: Resets the attempts left message.
document.getElementById("guessInput").value = '';: Clears the input field.
document.getElementById("guessInput").disabled = false;: Enables the input field.
document.querySelector("button[onclick='guessNumber()']").disabled = false;: Re-enables the guess button.
generateRandomNumber();: Initializes the game by generating the first secret number.
CSS
body { ... }: Styles the body of the document:
font-family: Arial, sans-serif;: Sets the font.
display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;: Centers the game container vertically and horizontally.
background-color: #e0f7fa;: Sets a light blue background color.
.dialog-box { ... }: Styles the main game container:
text-align: center; padding: 20px; border: 2px solid #4CAF50; border-radius: 10px;: Adds padding, border, and rounded corners.
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);: Adds a subtle shadow for a lifted effect.
background-color: #ffffff; max-width: 400px; width: 100%;: Sets the background color and width.
h1 { color: #333; }: Styles the heading text color.
p { margin: 10px 0; }: Adds vertical margin to paragraph elements.
.input-container { ... }: Styles the container for input and button:
display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;: Uses flexbox to align items and add spacing.
input[type="number"] { ... }: Styles the input field:
padding: 10px; border: 1px solid #5a40a9; border-radius: 5px; flex: 1;: Adds padding, border, rounded corners, and allows it to expand.
button { ... }: Styles the buttons:
padding: 10px 20px; background-color: #717fff; color: #fcfcfc; border: 1px solid #0f12ce; border-radius: 5px; cursor: pointer;: Sets padding, background color, text color, border, rounded corners, and pointer cursor.
button:hover { background-color: #7876ba; }: Changes background color on hover.
#result, #attempts { ... }: Styles result and attempts text:
font-size: 18px; margin-top: 10px; color: #333;: Sets font size, margin, and text color.