class Wall{
    constructor(x, y){
        this.image = new Image();
        this.image.src = "../../library/firewall2.png";

        this.image2 = new Image();
        this.image2.src = "../../library/firewall2.1.png";
        
        this.x = x;
        this.y = y;

        this.life = 2;
    }

    draw(){
        if(this.life == 2){
            antifirewall.drawImage(this.image, this.x, this.y);
        } else if(this.life == 1){
            antifirewall.drawImage(this.image2, this.x, this.y);
        }
    }
    dead(){
        this.life--;
    }   
}