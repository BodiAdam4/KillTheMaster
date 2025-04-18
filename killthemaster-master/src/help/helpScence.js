class HelpScence{
    constructor(index){
        clearCamvases();
        this.index = index;
        
        this.images = [];
        for(let i = 1; i <= 3; i++) {
            this.img = new Image();
            this.img.src = "../../library/leiras"+i+".png";
            this.images.push(this.img);
        }
        this.startTime = Date.now();

        this.isFirst = true;
    }

    draw(){
        if(this.isFirst){
            this.startTime = Date.now();
            this.isFirst = false;
        }
        
        menuElement.style.background = "rgba(222,0,0,0)";
        menu.drawImage(this.images[this.index], 0, 0, width, height);

        menu.font = "50px Times New Roman";
        menu.fillStyle = "black";
        menu.fillText("A space megnyomásával kezdheted el a játékot.", width/2-500, height-30);
    }
    step(){
        /*if(Date.now() - this.startTime >= 5000){
            level++;
            menuElement.style.background = "rgba(0,0,0,0)";
        }*/
    }
    keyDown(e){
        if(e.key === " "){
            level++;
            menuElement.style.background = "rgba(0,0,0,0)";
        }
    }
    keyUp(){

    }
}