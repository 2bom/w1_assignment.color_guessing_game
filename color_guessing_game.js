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
      //not a color in the array.
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
  var str_n_u = user_guess.charCodeAt(0);
  var str_n_t = target.charCodeAt(0);
  //alphbetically higher than the target.
  if (str_n_u > str_n_t) {
    alert("Sorry, your guess is not correct!\n\nHint: your color is alphbetically higher than mine.\nPlease try again.");
  }
  //alphbetically lower than the target.
  if (str_n_u < str_n_t) {
    alert("Sorry, your guess is not correct!\n\nHint: your color is alphbetically lower than mine.\nPlease try again.");
  }
  else {
    //correct.
    alert("That's correct!\nCongratulations! You have guessed the color!\n\nIt took you " + guesses + " guesses to Finish the game\nYou can see the color in the background.");
    var myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    return true;
  }
}
