class SideGameScene {
    constructor(num) {
        clearCamvases();
        this.playerImage = new Image();
        this.playerImage.src = "../../library/caracter2.png";

        this.bgImage = new Image();
        this.bgImage.src = "../../library/side_bg.jpg";

        this.ground_y = 440;
        this.x = 200;
        this.y = this.ground_y;
        

        this.deltaV = 0;
        this.deltaT = 0;
        this.g = 1000;

        this.lastMove = Date.now();
        this.isJump = false;

        this.enemies = [];
        this.lastEnemy = Date.now();

        this.nexEnemyTime = 3000; //ms

        this.numberOfEnemies = num;

        this.passedEnemies = 0;
    }

    jump() {
        this.deltaV = -900;  
    }

    draw() {
        side.drawImage(this.bgImage, 0, 0, width, height);
        side.drawImage(this.playerImage, this.x, this.y);

       /* // Draw the score
        side.fillStyle = "white";
        side.rect(0, 0, 400, 100);
        side.fill();

        side.font = "100px Arial";
        side.fillStyle = "black";
        side.fillText(this.passedEnemies + " / " + this.numberOfEnemies, 35, 90);*/

        for(let enemy of this.enemies){
            enemy.draw();
        }
    }

    step() {
        if(Date.now() > this.lastEnemy+this.nexEnemyTime){
            if(level === 1 && this.passedEnemies === this.numberOfEnemies - 1){
                this.enemies.push(new FireWallEnemy("kreta"));
            } else if(level === 5 && this.passedEnemies === this.numberOfEnemies - 1){
                this.enemies.push(new FireWallEnemy("mester"));
            } else{
                this.enemies.push(new FireWallEnemy(" "));
            }
            
            this.lastEnemy = Date.now();  
            if(this.enemies.length > this.numberOfEnemies){
                level++;
                console.log("win");
                
            } 
             this.passedEnemies ++;
        }
        for(let enemy of this.enemies){
            enemy.step();
        }

        if(this.isJump){
            let passedTime = (Date.now() - this.lastMove) / 1000;
            this.y += (this.g / 2) * (passedTime ** 2) + (this.deltaV * passedTime);
            this.deltaV += this.g * passedTime;
            //console.log(this.isJump);
        }
        
        if(this.y >= this.ground_y){
            this.isJump = false;
            this.y = this.ground_y;
        }
        
        this.lastMove = Date.now();

        for(let enemy of this.enemies){
            if(this.x+100 > enemy.x && this.x+200 < enemy.x+223 && this.y > this.ground_y-250){
                end.succeed = false;
                end.draw();
            }
        }
        
    }

    keyDown(e) {
        if (e.key == " " && !this.isJump) {
            this.jump();
            this.isJump = true;
        }
    }


    keyUp() {

    }


}