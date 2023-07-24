// DETECTING BUTTON PRESS
var length = document.querySelectorAll(".drum").length;
for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

// DETECTING KEY PRESS
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var snareSnd = new Audio("sounds/snare.mp3");
      snareSnd.play();

      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(innerHTML);
      break;
  }
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+ currentkey);
  activeButton.classList.add("pressed");

  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100)
}
