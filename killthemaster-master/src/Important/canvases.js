let width = window.innerWidth;
let height = window.innerHeight;



//Menu canvas
let menuElement = document.querySelector("#Menu");
menuElement.width = width;
menuElement.height = height;
menuElement.style.background = "rgba(0,0,0,0)";
menuElement.style.position = "absolute";
let menu = menuElement.getContext("2d");


//Side canvas
let sideElement = document.querySelector("#Side");
sideElement.width = width;
sideElement.height = height;
sideElement.style.background = "rgba(0,0,0,0)";
sideElement.style.position = "absolute";
let side = sideElement.getContext("2d");

//Antifirewall canvas
let antifirewallElement = document.querySelector("#Antifirewall");
antifirewallElement.width = width;
antifirewallElement.height = height;
antifirewallElement.style.display = "block";
antifirewallElement.style.background = "rgba(0,0,0,0)";
antifirewallElement.style.position = "absolute";
let antifirewall = antifirewallElement.getContext("2d");

//Collecting canvas
let collectingElement = document.querySelector("#CollectingCanvas");
collectingElement.width = width;
collectingElement.height = height;
collectingElement.style.background = "rgba(0,0,0,0)";
collectingElement.style.position = "absolute";
let collecting = collectingElement.getContext("2d");


//Flappy canvas
let flappyElement = document.querySelector("#Flappy");
flappyElement.width = width;
flappyElement.height = height;
flappyElement.style.background = "rgba(0,0,0,0)";
flappyElement.style.position = "absolute";
let plappy = flappyElement.getContext("2d");



//GameOver canvas
let gameOverElement = document.querySelector("#GameOver");
gameOverElement.width = width;
gameOverElement.height = height;
gameOverElement.style.background = "rgba(0,0,0,0)";
gameOverElement.style.position = "absolute";
let gameOver = gameOverElement.getContext("2d");