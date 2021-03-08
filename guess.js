// MARCH 8, 2021
// GUESS THAT NUMBER

// TEXT / MESSAGE to be used throught file
const enterNumText = "Please enter a number greater than zero";

// LET cause this variable can be changed
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

//For storing the number to be guessed
let randomNum;

// For storing the number of atempts left
let attempts;

// For storing the user's guess
let guess;

// For storing user's response to play again or not
let playAgain;

// STARTING ALERT MESSAGE - creates (OK) button with msg
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start to the game.`);

// RESTARTGAME - Game restarts al long as restartGame has a value of true
while (restartGame){

    // parseInt()//Attempts to turn a string into a number
    // Asks user to enter a number to set the upper bound for the random number that will be created
    rangeNum = parseInt(prompt(`Please enter a maximum number for the range:`));//ADDS PROMPT

// Verifies the user's entry for a range number is a number greater than zero (NOTE: All numbers, positive and negative, have a default boolean value of true except for zero which has a default boolean value of false.  Also, NaN has a default boolean value of false as well)
while (!rangeNum || rangeNum < 1){
    rangeNum = parseInt(prompt(enterNumText));
  }

// (Math.floor Eliminates partial number being input) Creates the random number using the RANGE number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) = + 1;

    // Prompts user to enter a number of ATTEMPTS allowed (AKA Number of guesses)
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));


// Verifies the user's entry for a number of ATTEMPTS allowed is a number greater than zero
while (!attempts || attempts < 1){
    attempts = parseInt(prompt(enterNumText));
  }
// Asks user to enter a guess in the range that they set
guess = prompt(`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`);

// Continues looping until the user guesses the correct number or runs out of attempts (Loops until a BREAK keyword is run)

while (true){
    // Displays the number / answer when the code word is entered
    if (guess === 'I4get8in'){
        alert(`The number is ${randomNum}`);
        prompt (`Please enter a guess between 1 and ${rangeNum}. You have ${attempts} attempt(s) left:`);
    }

    // Tries to convert the user's guess into a number
guess = parseInt(guess );

// parseInt requires a number?
// Verifies the user's guess is a number, a number greater than zero, and within the range they set
while (!guess || guess < 1 || guess > rangeNum){
    guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
  }

// REMOVE 1 ATTEMPT (SUBTRACT ONE FROM THE NUMBER OF ATTEMPTS)
attempts--;

// CHECKING THE USER'S GUESS TO SEE IF THEY ARE CORRECT with if (guess ===)strick equals. If  do guess correctly the game ends.
if (guess === randomNum){
    alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);

    // breaks stops this set of code running if they get the correct answer. BREAKS will get you out of a LOOP
    break;

    //  ELSE IF checks to see if the user has any attempts left. If not then the game ends.
} else if (attempts === 0){
    alert(`Sorry, but you have run out of attempts :( The number was ${randomNum}`);
    break;
// Checks if user's guess was too low and prompts user to guess again if so

} else if (guess < randomNum){
    // DO NOT NEED TO USE parseIn - cause after they enter this guess, the loop will start over to parseIn(guess)
    // CHECKS IF USER ATTEMPTS TOO LOW - if so prompts again
    guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

// CHECKS IF USER ATTEMPTS WAS TOO HI - If so prompts again
} else {
    guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
  }
 
}
// Prompts user with option to play again
playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

// LOOP continues until user submits a valid response(LOOPS until a BREAK keyword is run)
// CASE SENSITIVE -  adding .toUpperCase () will change to uppercase if lowercase input
while (true){

    // Checks if the user's answer is no (AKA "N" or "n")
if (playAgain.toUpperCase() === "N") {
    // ALERTS the user that the game is over and game does not restart
    alert(`Thanks for playing!`);
    restartGame = false;
    break;
} else if (playAgain.toUpperCase() === "Y") {
break;

// PROMPTS user to enter a valid response. Starts LOOP again.
} else {
playAgain = prompt(`Please enter Y or N:`);
}
break;
}
}




