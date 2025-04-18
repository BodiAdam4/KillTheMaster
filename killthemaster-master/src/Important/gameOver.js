class GameOver{
    constructor(){
        //Image of the game over scene
        this.img = new Image();
        this.img.src = "../../library/gameover-background.jpg";

        //Image of the win scene
        this.won = new Image();
        this.won.src = "../../library/timedout.png";

        //If true, then game failed
        this.gameEnded = false;

        //If true, then game won
        this.succeed = false;
    }

    
    //Draw the end scene
    draw(){
        if(this.succeed === true){
            gameOver.drawImage(this.won, 0, 0, width, height);
        }else{
            gameOver.drawImage(this.img, 0, 0, width, height);
        }
       
    }
}