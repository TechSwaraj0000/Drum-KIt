document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Check classes to identify which sound to play
            if (this.classList.contains("s")) {
                var tom2 = new Audio("sound/Sa.mp3");
                tom2.play();
            } else if (this.classList.contains("d")) {
                var tom3 = new Audio("sound/Re.mp3");
                tom3.play();
            } else if (this.classList.contains("f")) {
                var tom4 = new Audio("sound/Ga.mp3");
                tom4.play();
            } else if (this.classList.contains("g")) {
                var tom5 = new Audio("sound/Ma.mp3");
                tom5.play();
            } else if (this.classList.contains("h")) {
                var tom6 = new Audio("sound/Pa.mp3");
                tom6.play();
            } else if (this.classList.contains("j")) {
                var tom7 = new Audio('sound/Dha.mp3');
                tom7.play();
            } else if (this.classList.contains("x")) {
                var tom8 = new Audio('sound/Ni.mp3');
                tom8.play();
            }
        });
    });
});
