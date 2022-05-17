let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).on("click", function() {

    $("." + randomChosenColor).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
    return randomChosenColor;
  });


};

$(".btn").click(nextSequence);
