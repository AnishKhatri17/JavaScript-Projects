//NUMBER GUESSING GAME 


const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1 )) + minNum;

let attempts = 1;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum} :`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number ");
    }

    else if(guess < minNum){
        window.alert(`Please don't enter number below ${minNum} !`);
    }
    
    else if(guess > maxNum){
        window.alert(`Please don't enter number above ${maxNum} !`);
    }

    else{
            attempts++;
            if(guess > answer){
                window.alert("TOO HIGH, please try smaller number.");
            }

            else if(guess < answer){
                window.alert("TOO LOW, please try higher number.");
            }

            else{
                window.alert(`Congratulations you guessed it right.\n The answer is ${answer}. You guessed it in ${attempts} attempts. \n\nThank for playing this game.`);
                running = false;
            }
    }
}