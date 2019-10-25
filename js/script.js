// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
let userChoice;
let computerChoice;
let winner;
$("#shoot").click(function(){
     let userChoice= $("#input").val();
     computerChoice=Math.random();
     $("#userChoice").text(userChoice);


    console.log(computerChoice);
     if(computerChoice <0.999 && computerChoice>0.666) {
         computerChoice="rock"
        $("#computerChoice").text("ROCK");
     }else if(computerChoice<.666 && computerChoice>0.333){
        $("#computerChoice").text("SCISSORS");
         computerChoice="scissors"
    }else if(computerChoice<0.333 && computerChoice>0){
        $("#computerChoice").text("PAPER")
         computerChoice="paper"
    }

    if(userChoice===computerChoice){
        winner = "TIE";
        $("#result").text(winner);
    }else if(userChoice==="scissors" && computerChoice==="rock"){
        $("#result").text("COMPUTER WINS");
    }else if(userChoice==="rock" && computerChoice==="paper"){
        $("#result").text("COMPUTER WINS");
    }else if(userChoice==="paper" && computerChoice==="rock"){
        $("#result").text("COMPUTER WINS");
    }else if(userChoice==="rock" && computerChoice==="scissors"){
        $("#result").text("YOU WIN");
    }else if(userChoice==="scissors" && computerChoice==="paper"){
        $("#result").text("YOU WIN");
    }else if(userChoice==="paper" && computerChoice==="rock"){
        $("#result").text("YOU WIN");
    }else if(userChoice==="scissors" && computerChoice==="paper"){
        $("#result").text("YOU WIN");

    }
    });

    console.log("#result");
