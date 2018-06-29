// This function creates the 'Hero Goal'between 19-120
$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

// This function connects the 'randomNumber' id to the html document 
$("randomNumber").text(Random);

//Each hero needs a random number assigned to add up to the goal number
var batman;
var superman;
var spiderman;
var ironman;

// Vars for score keeping
var userTotal;
var userWins= 0;
var userLosses= 0;
$("#numberWins").text(userWins);
$("#numberLosses").text(userLosses);
reset();
// Function to reset the game

function reset() {
    Random= Math.floor(Math.random()*101+19);
    console.log(Random);
    $("#randomNumber").text(Random);
    batman = Math.floor(Math.random()*10+1);
    superman = Math.floor(Math.random()*10+1);
    spiderman = Math.floor(Math.random()*10+1);
    ironman = Math.floor(Math.random()*10+1);
    userTotal = 0;
    $("finalTotal").text(userTotal);
    }

// Function to add winning combinations to userTotal category
function winner() {
alert("Winner!");
    wins++;
    $("#numberWins").text(userWins);
    reset();
}

// Function to add losing combinations to userTotal category
function loser() {
    alert ("So Close! Try again?");
      losses++;
      $("#numberLosses").text(userLosses);
      reset();
    }

$(".SuperHero").on("click", function() {});

// Function for clicking on heros 
$("#one").on("click", function() {
    userTotal = userTotal + batman;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
            winner();
        }
        else if (userTotal > Random) {
          loser();
        }   
  });  
  $("#two").on ("click", function() {
    userTotal = userTotal + superman;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal); 
        if (userTotal == Random){
            winner();
        }
        else if ( userTotal > Random) {
          loser();
        } 
  }); 
  $("#three").on ("click", function() {
    userTotal = userTotal + spiderman;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

// Function for the winning and losing conditions 
if (userTotal == Random) {
    winner();
  }
  else if (userTotal > Random) {
    loser();
  } 
});  
$("#four").on ("click", function() {
userTotal = userTotal + ironman;
console.log("New userTotal= " + userTotal);
$("#finalTotal").text(userTotal); 

    if (userTotal == Random) {
    winner();
  }
  else if ( userTotal > Random) {
    loser();
  }
  });   
});

