class Antifirewall {
    constructor() {
        clearCamvases();
        antifirewallElement.style.background = "rgba(60,0,0,0)";
        antifirewallElement.style.display = "block";

        this.y = height - 70;
        this.x = width / 2 - 150;

        this.vx = 0;
        this.lastMove = Date.now();


        this.ball_x = width / 2;
        this.ball_y = height / 4 * 3;
        this.sx = 0;
        this.sy = 5;

        this.playgroundTop = 210;
    }

    draw() {
        antifirewall.beginPath();
        // uto
        antifirewall.fillStyle = "rgba(0,0,0,1)";
        antifirewall.rect(this.x, this.y, 300, 50);
        antifirewall.fill();
        // labda
        antifirewall.fillStyle = "rgba(0,0,0,1)";
        antifirewall.arc(this.ball_x, this.ball_y, 20, 0, Math.PI * 2);
        antifirewall.fill();
    }
    step() {
        // uto leptetese
        let passedTime = Date.now() - this.lastMove;
        if (this.vx > 0 && this.x < width-300) {
            this.x += this.vx * passedTime / 1000;
        }
        if (this.vx < 0 && this.x > 0) {
            this.x += this.vx * passedTime / 1000;
        }   
        
        this.lastMove = Date.now();

        //labda leptetese
        this.ball_x += this.sx;
        this.ball_y += this.sy;

        // labda ütközik a falakkal
        if (this.ball_x > width - 10 || this.ball_x < 10) {
            this.sx *= -1;
        }
        if (this.ball_y < this.playgroundTop) {
            this.sy *= -1;
            this.ball_y = this.playgroundTop+10;
        }
        if (this.ball_y > height - 10) {
            // A gameover
            end.succeed = false;
            end.draw();
        }

        if (this.ball_y + 40 > this.y && this.ball_x > this.x && this.ball_x+40 < this.x + 300) {
            if(this.sx < 0){
                this.sx = random(-4, -7);
            } else{
                this.sx = random(4, 7);
            }
            this.sy = -random(4,7);
            //this.sy *= -1;
        }
    }
}