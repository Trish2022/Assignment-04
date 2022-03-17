var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  console.log("Computer chooses: " + computerChoice);

var compare = function(choice1,choice2) {  
    if (choice1 === choice2) {       
        return "The result is a tie!" + " " + "Lets play again." ;
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice work!";
        } else {
            return "paper wins" + "<br>" + "Your computer beat you.";
        }
    } else if (choice1 === "paper") { 
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice work!";
        } else {
            return "scissors wins" + "<br>" + "Your computer beat you.";
        }         
    } 
    else if (choice1 === "scissors") { 
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "Your computer beat you.";
        } else {
            return "scissors wins" + "<br>" + "You beat the computer, nice work!";
        }
    }
    
    } //closes compare function
   document.write("Computer chose: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));
    
// What if the result ends in a tie? Figure out how to handle that as well.
// What if the user enters something other than rock, paper, or scissors into the prompt? 