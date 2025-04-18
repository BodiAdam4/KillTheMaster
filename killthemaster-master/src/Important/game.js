//choose the start level

let level = 0;
let scenes = [ // new HelpScence(0),
                //new SideGameScene(11),        //Side game
               // new HelpScence(1),
               // new AntifireWallScene(),    //Antifirewall minigame
               // new HelpScence(0),
              //  new SideGameScene(21),        //Side game
                new HelpScence(2),
                new CollectingScene()       //Collection game
];
//Count the collected bombs
let countBombs = 0;
//Chance of the bomb spawning
let bombChance = 66; // 100-bombChance%

//Create a new GameOver Object
let end = new GameOver();

antifirewallElement.style.display = "none";

addEventListener("keydown", e => scenes[level].keyDown(e));
addEventListener("keyup", e => scenes[level].keyUp(e));


function draw() {
    menu.clearRect(0, 0, width, height);
    side.clearRect(0, 0, width, height);
    scenes[level].draw();
}

function step() {
    draw();
    scenes[level].step();
    if(level === 3){
        antifirewallElement.style.display = "block";
    } else{
        antifirewallElement.style.display = "none";
    }
    requestAnimationFrame(step);
}

step();


