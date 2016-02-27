var colors = ["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
var target;
var user_guess;
var finished;
var guesses = 0;

function do_game() {
  var scale = colors.length;
  var color_number = scale - 1;
  var random_color_number = Math.floor(Math.random()*color_number);
  target = colors[random_color_number];

  while (!finished){
    user_guess = prompt("I am thinking of one of these colors:\n\n'blue,cyan,gold,gray,green,magenta,orange,red,white,yellow'\n\nWhat color am I thinking of?");

    guesses += 1;
    if (user_guess == null) {
      alert("Finish this game.");
      finished = true;
    } else {
      var a = colors.indexOf(user_guess);
      if (a == -1) {
        alert("Sorry, I don't recognize your color.\nPlease try again.");
      } else {
      finished = check_guess();
      }
    }
  }
}

function check_guess() {
  if (user_guess != target) {
    alert("BeepBeep!");
  }
  else {
    alert("That's correct!\nCongratulations! You have guessed the color!\n\nIt took you " + guesses + " guesses to Finish the game!");
    return true;
  }
}
