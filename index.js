noOfdrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfdrumbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

//Detecting key using button

    function handleclick() {
        var a = this.innerHTML;
        makesound(a);
        buttonanimation(a);
        console.log(a);
    }
}

//Detecting key using keyboard key

document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonanimation(event.key);
})

function makesound(key) {
    switch (key) {

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(event.key);

    }
}

function buttonanimation(current_key){
  var animation=document.querySelector("."+current_key);
  animation.classList.add("pressed");

  setTimeout(function () {
    animation.classList.remove("pressed");
  }, 100);
}
