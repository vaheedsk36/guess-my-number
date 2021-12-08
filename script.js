'use strict';

let guessNumber=Math.trunc(Math.random()*20+1);
// console.log(guessNumber);  This prints the value to be guessed in console
let score=20;
let highScore=0;

function displayMessage(message){
    document.querySelector(".message").textContent=message;
}

function audioFile(fileName){
    var audio = new Audio(fileName);
            audio.play();
}


document.querySelector(".check").addEventListener("click",function(){
    const inputNumber=Number(document.querySelector('.guess').value);
    if(!inputNumber){
        displayMessage('⛔️ No number!');
        
    }
    else if(inputNumber===guessNumber){
        document.querySelector(".number").textContent=guessNumber;
        document.querySelector("body").style.backgroundColor="#60b347"
        
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
          }

        displayMessage("🎉 Correct Number!");
        audioFile("resources/correct.mp3");
        
    }
    else if(inputNumber!=guessNumber){
        if (score > 1){
        displayMessage(inputNumber >guessNumber?"Too High":"Too Low");
        score--;
        document.querySelector(".score").textContent=score;
        }
        document.querySelector("body").style.backgroundColor="#FF0000";
        audioFile("resources/wrong.mp3");
        
        if(guessNumber>10){
            document.querySelector(".hint1").textContent="The number is >10";
        }
        else{
            document.querySelector(".hint1").textContent="The number is <10";
        }
    }
    else {
        displayMessage("You lost the Game");
        document.querySelector("body").style.backgroundColor="#FF0000";
        
    }
});


document.querySelector(".again").addEventListener("click",function(){
    score=20;
    guessNumber=Math.trunc(Math.random()*20+1);
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".hint1").textContent="-";
});


