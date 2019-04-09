var buttonAlert;

$("button").on("click", function (){


});

setTimeout( () => {
  document.getElementById("choices").innerHTML = "New text";
  document.write // will maybe work?
  console.log('Hello')
},
  4 * 1000
);

// Set function to innerhtml questions/radio buttons
var audio = new Audio("final.mp3");

setTimeout(fiveSeconds, 5000);


function fiveSeconds() {
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
  setTimeout(tenSeconds, 5000);
}

function tenSeconds() {
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
  setTimeout(timeUp, 5000);
}

function timeUp() {
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
  //  The following line will play the audio file we linked to above:
  audio.play();
}