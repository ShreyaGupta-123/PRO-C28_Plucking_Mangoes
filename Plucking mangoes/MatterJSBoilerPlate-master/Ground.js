class Ground{
	constructor(x,y,width,height){
this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
        var angle=this.body.angle;
        var position=this.body.position;
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
	fill("brown");
        rect(0,0,this.width,this.height);

        pop()
    }
}
 
