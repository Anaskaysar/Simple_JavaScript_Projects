'use strict';

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize score and highest score variables
let score = 20;
let highestScore = 0;

// Set initial score on UI
document.querySelector('.score').textContent = score;

// Utility function to display messages to the user
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// Event listener for the "Check!" button
document.querySelector('.check').addEventListener('click', function () {
    // Get user's guess from input field and convert it to a number
    const guessNumber = Number(document.querySelector('.guess').value);

    // If input is empty or zero (falsy value)
    /* Feature Challenge #1: Limit the Guessing Range
1. Inside your click event handler for the 'Check!' button, after converting the input to a number:
2. Add a condition to check if the number is less than 1 or greater than 20
3. If it is, use displayMessage() to show something like "⛔ Enter a number between 1 and 20!"
4. Make sure to return early so the rest of the code does not run
5. This will prevent the game from counting invalid inputs as a real attempt
*/
    if (!guessNumber || guessNumber < 1 || guessNumber > 20) {
        displayMessage('No Number Found');
    } else if (guessNumber === secretNumber) {
        // Reveal the secret number
        document.querySelector('.number').textContent = secretNumber;

        // Show success message
        displayMessage('Hurray! You matched the secret number');

        // Change background and number box styling
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Update high score if current score is greater
        if (score > highestScore) {
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }

        // If guess is incorrect (either too high or too low)
    } else if (guessNumber !== secretNumber) {
        // If player still has remaining score
        if (score > 1) {
            // Show hint and reduce score
            displayMessage(guessNumber > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // If no score left, player loses
            displayMessage('Alas! You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Event listener for the "Again!" button (reset the game)
document.querySelector('.again').addEventListener('click', function () {
    // Generate new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reset score to 20
    score = 20;

    // Restore UI to initial state
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing.....');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
});


/*
1. Inside your click event handler for the 'Check!' button, after converting the input to a number:
2. Add a condition to check if the number is less than 1 or greater than 20
3. If it is, use displayMessage() to show something like "⛔ Enter a number between 1 and 20!"
4. Make sure to return early so the rest of the code does not run
5. This will prevent the game from counting invalid inputs as a real attempt
*/
