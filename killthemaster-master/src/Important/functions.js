function random(x,y){
    return Math.floor(Math.random()*(y-x+1))+x;
}

function clearCamvases(){
    console.log("clear");
    menuElement.style.background = "rgba(0,0,0,0)";
    sideElement.style.background = "rgba(0,0,0,0)";
    antifirewallElement.style.background = "rgba(0,0,0,0)";
    collectingElement.style.background = "rgba(0,0,0,0)";
    flappyElement.style.background = "rgba(0,0,0,0)";
    gameOverElement.style.background = "rgba(0,0,0,0)";
}