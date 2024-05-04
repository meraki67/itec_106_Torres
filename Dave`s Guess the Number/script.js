let randomNum = Math.floor(Math.random() * 10) + 1;
let att = 5;
let feedback = document.getElementById('feedback');
let refresh = document.getElementById('refreshID');

document.querySelector('.guessSubmit').addEventListener('click', function() {
    let guess = document.querySelector('.guessField').value;

    if (isNaN(guess) || guess < 1 || guess > 10) {
        feedback.textContent = "Invalid input: Please Input number between 1 - 10";
    } else {
        att--;
        if (guess > randomNum) {
            feedback.textContent = "Too high! Guess again.";
        } else if (guess < randomNum) {
            feedback.textContent = "Too low! Guess again.";
        } else {
            feedback.textContent = "Congratulations! You've won in " + (5 - att) + " attempts.";
            document.querySelector('.guessField').disabled = true;
            document.querySelector('.guessSubmit').disabled = true;
            document.querySelector('.refreshButton').classList.add('visible');
        }
    }

    if (att === 0) {
        feedback.textContent = "You've run out of attempts! The number was " + randomNum + ".";
        document.querySelector('.guessField').disabled = true;
        document.querySelector('.guessSubmit').disabled = true;
        document.querySelector('.refreshButton').classList.add('visible');
    }

})

document.querySelector('.refreshButton').addEventListener('click', function() {
    if (att === 0){
        window.alert("Sad to know that! Do you want to play again?");
            if (window.confirm("Click 'OK' to play the game again!")){
                location.reload();
            }
            else{
                document.querySelector('.guessField').disabled = true;
                document.querySelector('.guessSubmit').disabled = true;
            }
    }    
    else{
        window.alert("Congrats again! Do you want to play again?");
        if (window.confirm("Click 'OK' to play the game again!")){
            location.reload();
        }
        else{
            document.querySelector('.guessField').disabled = true;
            document.querySelector('.guessSubmit').disabled = true;
        }
    }
});