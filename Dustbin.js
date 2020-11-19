class Dustbin{
    constructor(x, y, width, height) {
        var options = {isStatic:true}
        this.body = Bodies.rectangle(x,y,width, height, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body)
        this.image = loadImage("dustbingreen.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        rectMode(CENTER)
        fill ("white");
        rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image (this.image,0,-this.height/2,this.width,this.height)
        pop ();
    }
}