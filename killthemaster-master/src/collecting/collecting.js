class Collecting{
    constructor(){
        clearCamvases();
        //conatains the xp bar iamges
        this.XPbars = [];

        //Fill up the array with xp bar images
        for(let i = 0; i < 21; i++){
            this.display_image = new Image();
            this.display_image.src = "../../library/hp"+(i+1)+".png";
            this.XPbars.push(this.display_image);
        }

        //Image of the player
        this.image = new Image();
        this.image.src = "../../library/servercomputer.png";
        
        //Radius of the player
        this.radius = 110;
        
        //Image of the explosion
        this.bumm = new Image();
        this.bumm.src = "../../library/explosion.png";

        //The last time when the player moved
        this.lastMove = Date.now();
        
        //The speed of the player
        this.serverVX = 0;

        //Coordinates of the player
        this.serverX = width/2-50;
        this.serverY = height-200;

        //The state of the explosion animation (1-6)
        this.explosionState = 0;

        //The last time when the state changed
        this.lastExplosionStateChange = Date.now();


    }
    //Draw the player, explosion, and the XP bar, when it is neccesary
    draw(){
        if(this.explosionState < 3){
            collecting.drawImage(this.image, this.serverX, this.serverY);
        }
        
        if (this.explosionState > 0 && this.explosionState <= 6) {
            collecting.drawImage(this.bumm,this.explosionState*200,0,200,200,this.serverX-100,this.serverY-100,400,400);
        }
        
        if(countBombs < 21){
            collecting.drawImage(this.XPbars[countBombs], 0, 0, 20, height);
        }
        
    }

    //The start of the explosion
    explode() {
        if (this.explosionState === 0) {
            this.explosionState = 1;
            this.lastExplosionStateChange = Date.now();
        }
    }

    //Calculate the next step of the animations
    step(){
        //Move the player
       /* if(this.serverX>0&&this.serverX+220 >width){
        let passedTime = Date.now()-this.lastMove;
        this.serverX += this.serverVX * passedTime/1000;
        this.lastMove = Date.now();
        }else if(this.serverX+220 >width)
        {
        let passedTime = Date.now()-this.lastMove;
        this.serverX += (this.serverVX*(-1)) * passedTime/1000;
        this.lastMove = Date.now();
        this.serverX -= 20;
        }else
        {
        let passedTime = Date.now()-this.lastMove;
        this.serverX += (this.serverVX*(-1)) * passedTime/1000;
        this.lastMove = Date.now();
        this.serverX += 20; 
        }    */    
        let passedTime = Date.now()-this.lastMove;
        if(this.serverVX > 0 && this.serverX < width-220){
            this.serverX += this.serverVX * passedTime/1000;
        }
        if(this.serverVX < 0 && this.serverX > 0){
            this.serverX += this.serverVX * passedTime/1000;
        }
        
        this.lastMove = Date.now();




        //Start the explosion animation, when you collected 20 bombs
        if(countBombs > 19){
            this.explode();
        }

        // Calculate the next state of the explosion,
        // and if the explosion finished, then save the success into a variable and draw the end scene.
        if (this.explosionState != 0 && Date.now() - this.lastExplosionStateChange > 100) {
            this.explosionState++;
            this.lastExplosionStateChange = Date.now();
            if (this.explosionState === 7) {
                end.succeed = true;
                end.draw();
            }
        }
    }

}

