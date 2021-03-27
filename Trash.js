class Trash {
    constructor() {
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(600,660,150,20,options);
        this.image = loadImage("Trash.png");

        World.add(world,this.body);
        this.leftBody = Bodies.rectangle(515,635,20,70,options);
        this.rightBody = Bodies.rectangle(685,635,20,70, options);

        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }

        display() {
            var pos = this.body.position;
            rectMode(CENTER);
            imageMode(CENTER);
            image(this.image,600,620,150,110);

            fill("green");
            //rect(pos.x,pos.y,this.width,this.height);
        }
}