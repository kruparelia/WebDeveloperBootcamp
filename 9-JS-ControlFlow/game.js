//create secretNumber
var secretNum = 4;

//as user for guess
var guess = prompt("Guess a number");

//check guess

if(Number(guess) === secretNum){
    alert("You guessed right!");
}

else if(Number(guess) > secretNum){
    alert("Guess is too high");
}

else{
    alert("Guess is too low");
}
