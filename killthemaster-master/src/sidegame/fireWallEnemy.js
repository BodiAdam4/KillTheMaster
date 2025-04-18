class FireWallEnemy{
    constructor(type){
        this.type = type;
        this.img = new Image();
        this.img.src = "../../library/firewall.png";

        this.eKreta = new Image();
        this.eKreta.src = "../../library/eKreta_server.png";

        this.mester = new Image();
        this.mester.src = "../../library/servercomputer.png";

        this.x = width;
        this.y = 460;
        this.hp = 100;

        this.speed = random(10, 20);
    }
    draw(){
        if(this.type === "kreta"){
            side.drawImage(this.eKreta, this.x, this.y, 223, 330);
        } else if(this.type === "mester"){
            side.drawImage(this.mester, this.x, this.y, 223, 330);
        }else{
            side.drawImage(this.img, this.x, this.y, 223, 330);
        }
    }
    step(){
        this.x -= this.speed;
        if((this.type === "kreta" || this.type === "mester") && this.x < width-400){
            this.x = width - 400;
        }
    }
}