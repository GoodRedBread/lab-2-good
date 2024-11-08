let sheepImage = "sheep.webp";
let bearImage = "bear.webp";
let wolfImage = "wolf.webp";
let mooseImage = "moose.webp";
let elkImage = "elk.webp";

let sheepButton = document.getElementById("sheep");
let bearButton = document.getElementById("bear");
let wolfButton = document.getElementById("wolf");
let mooseButton = document.getElementById("moose");
let elkButton = document.getElementById("elk");

let animalImage = document.getElementById("animalImage");

function resetButtonColors() {
    sheepButton.style.backgroundColor = "#d9043d"; 
    bearButton.style.backgroundColor = "#d9043d";
    wolfButton.style.backgroundColor = "#d9043d";
    mooseButton.style.backgroundColor = "#d9043d";
    elkButton.style.backgroundColor = "#d9043d";
}

sheepButton.style.backgroundColor = "#97bf04";

sheepButton.addEventListener("click", function() {
    animalImage.src = sheepImage;
    resetButtonColors();
    sheepButton.style.backgroundColor = "#97bf04";
});
bearButton.addEventListener("click", function() {
    animalImage.src = bearImage;
    resetButtonColors();
    bearButton.style.backgroundColor = "#97bf04";
});
wolfButton.addEventListener("click", function() {
    animalImage.src = wolfImage;
    resetButtonColors();
    wolfButton.style.backgroundColor = "#97bf04";
});
mooseButton.addEventListener("click", function() {
    animalImage.src = mooseImage;
    resetButtonColors();
    mooseButton.style.backgroundColor = "#97bf04"; 
});
elkButton.addEventListener("click", function() {
    animalImage.src = elkImage;
    resetButtonColors();
    elkButton.style.backgroundColor = "#97bf04"; 
});
