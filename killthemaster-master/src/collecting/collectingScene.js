//Mini game #3
class CollectingScene {
    constructor() {
        //create a new collecting object
        this.collectingMini = new Collecting();

        //array for the fallingstuffes
        this.fallingStuffes = [];

        //Setup the default speed of the player
        this.speed = -200;
        this.speed2 = 200;

        
        this.back = new Image();
        this.back.src = "../../library/serverpark.png";

    }





    //draw the sprites
    draw() {
        if (!end.gameEnded) {
            
            collecting.clearRect(0, 0, width, height);
            collecting.drawImage(this.back,0,0,1024,418,0,0,width,height);
            this.collectingMini.draw();

            for (let x of this.fallingStuffes) {
                x.draw();
            }

        }

    }
    //Run the level
    step() {

        //start the elements from the top of the screen
        if (random(1, 100) <= 3) {
            this.fallingStuffes.push(new FallingStuff());
        }

        //Next animations of collecting
        this.collectingMini.step();

        //Use the functions of the elements
        for (let x of this.fallingStuffes) {
            //calculate the middle of the player, and the element
            let servermiddleX = this.collectingMini.serverX + 110;
            let servermiddleY = this.collectingMini.serverY + 95;
            let fallingmiddleX = x.x + 50;
            let fallingmiddleY = x.y + 50;

            //Check if the player collide the element
            if (Math.sqrt((servermiddleX - fallingmiddleX) ** 2 + (servermiddleY - fallingmiddleY) ** 2) < this.collectingMini.radius + x.radius) {
                switch (x.choose) {
                    //No internet collide cause a game over
                    case 0: this.gameover();
                        break;
                        
                    //Coffe means a faster speed (1.1*)
                    case 1: this.speed *= 1.1;
                        this.speed2 *= 1.1;
                        break;
                        
                    //Pillow slow down your speed (0.9*)
                    case 2: this.speed *= 0.9;
                        this.speed2 *= 0.9;
                        break;

                    //Raise the chance of the bomb spawn (1%)
                    case 3: bombChance++;
                        break;
                        
                    //Reboot remove all the picked bombs
                    case 4: countBombs = 0;
                        break;
                    
                    //Index
                    case 5 : 
                        if(countBombs != 0){
                        countBombs--;
                        }
                        break;
                        
                    //Pizza raise the number of the bombs (1.5*)
                    case 6: countBombs = Math.floor(countBombs * 1.5);
                        break;

                    //Picked up a bomb
                    case 7: countBombs++;
                        break;
                }
                //Delete the colleided elements from the screen
                this.fallingStuffes.splice(this.fallingStuffes.indexOf(x), 1);
            }

            //Delete the unused elements
            if (x.y > height) {
                this.fallingStuffes.splice(this.fallingStuffes.indexOf(x), 1);
            }
            x.step();
        }
        draw();
    }

    //Check if key is pushed
    keyDown() {
        let key = event.key;
        if (key === "a"&&this.collectingMini.serverX > 0) {
            this.collectingMini.serverVX = this.speed;
        } else if (key === "d") {
            this.collectingMini.serverVX = this.speed2;
        }
    }


    //Check if key doesnt pushed any more
    keyUp() {
        this.collectingMini.serverVX = 0;
    }

    //Check if your game is failed
    gameover() {
        end.gameEnded = true;
        end.draw();
    }
}
