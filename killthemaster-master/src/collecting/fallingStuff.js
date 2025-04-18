class FallingStuff{
    constructor(){
        this.image = new Image();
        this.image.src = "../../library/nointernet.png"; // 10%

        this.image2 = new Image();
        this.image2.src = "../../library/coffee.png";  //10%
        
        this.image3 = new Image();
        this.image3.src = "../../library/parna.png";  //10%
        
        this.image4 = new Image();
        this.image4.src = "../../library/cola.png"; // 10%
        
        this.image5 = new Image();
        this.image5.src = "../../library/rebooting.png"; // 10% 
        
        this.image6 = new Image();
        this.image6.src = "../../library/index.png"; // 10%                                                
        
        this.image7 = new Image();
        this.image7.src = "../../library/pizza.png"; // 1%
        
        this.image8 = new Image();
        this.image8.src = "../../library/forkbomb.PNG"; //5%
        
        this.image9 = new Image();
        this.image9.src = "../../library/semmi.png";                                               
        
        this.types = [this.image,this.image2,this.image3,this.image4,this.image5,this.image6,this.image7,this.image8,this.image9];

        this.imageWidth = 100;
        this.radius = 50;


        this.lastMoveY = Date.now();
        this.vy = 300;

        this.choose = this.pick();

        this.recent = this.types[this.choose];
        
        this.x = random(0,width-this.imageWidth);
        this.y = -100;
    }

    draw(){
        collecting.drawImage(this.recent, 0, 0, 100, 100, this.x, this.y, 100, 100);  
    }

    pick(){
        let number = random(1,100);
        if(number<=10){
            return 0;
        }else if(number <= 20){
            return 1;
        }else if(number <= 30){
            return 2;
        }else if(number <= 40){
            return 3;
        }else if(number <= 50){
            return 4;
        }else if(number <= 60){
            return 5;
        }else if(number <= 61){
            return 6;
        }else if(number <= bombChance){
            return 7;
        }else{
            return 8;
        }
    }

    step(){
        let passedTime = Date.now() - this.lastMoveY;
        this.y += this.vy * passedTime/1000;
        this.lastMoveY = Date.now();
    }

}