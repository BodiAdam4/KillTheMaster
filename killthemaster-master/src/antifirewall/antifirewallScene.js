class AntifireWallScene {
    constructor() {
        antifirewallElement.style.background = "rgba(255,255,255,1)";
        this.antiFireWallMini = new Antifirewall();
        this.walls = [];
        this.bg_image = new Image();
        this.bg_image.src = "../../library/server_bg.png";
        this.eKreta_x = (Math.random() * (width - 200)) + 100;

        this.eKreta_server_image = new Image();
        this.eKreta_server_image.src = "../../library/eKreta_server.png";

        //falak kirajzolása
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 2; j++) {
                this.walls.push(new Wall(i * width / 4, j * 100 + 170));
            }
        }

    }



    // billentyűfigyelés
    keyDown() {
        let key = event.key;
        if (key === "a") {
            this.antiFireWallMini.vx = -800;
        } else if (key === "d") {
            this.antiFireWallMini.vx = 800
        }
    }
    keyUp() {
        this.antiFireWallMini.vx = 0;
    }


    // Kirajzoljuk a játékot
    draw() {
        antifirewall.clearRect(0, 0, width, height);
        antifirewall.drawImage(this.bg_image, 0, 200, width, height);
        antifirewall.drawImage(this.eKreta_server_image, this.eKreta_x, 30, 150, 150);
        this.antiFireWallMini.draw();
    }

    step() {
        this.antiFireWallMini.step();
        for (let x of this.walls) {
            x.draw();
            if (x.life >= 1) {
                antifirewall.beginPath();
                antifirewall.moveTo(0, 200);
                antifirewall.lineTo(width, 200);
                antifirewall.lineWidth = 5;
                antifirewall.stroke();
            }
            if (x.y < this.antiFireWallMini.ball_y && x.y + 150 > this.antiFireWallMini.ball_y+40 && this.antiFireWallMini.ball_x+40 > x.x && this.antiFireWallMini.ball_x < x.x + 300) {
                x.dead();
                if (x.life < 1) {
                    this.walls.splice(this.walls.indexOf(x), 1);
                }
                this.antiFireWallMini.sy *= -1;
            }
            
        }
        if (this.walls.length < 1) {

            this.antiFireWallMini.playgroundTop = 10;
            if (this.antiFireWallMini.ball_y <= 180 && this.antiFireWallMini.ball_x > this.eKreta_x && this.antiFireWallMini.ball_x < this.eKreta_x + 150) {
                //antifirewallElement.style.display = "none";
                clearCamvases();
                level++;
                // Win the game
            }
        }

    }
}