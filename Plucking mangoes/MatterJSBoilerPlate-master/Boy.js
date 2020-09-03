class Boy{
    constructor(bodyA,pointB){
     var options={
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:10
     }
     this.pointB=pointB
     this.body=Constraint.create(options);

     World.add(world,this.body);
    }

    fly(){
    this.body.bodyA=null
    }

    display(){
    
        var BodyA=this.body.bodyA;
        var PointB=this.pointB;
        if(this.body.bodyA){
        strokeWeight(4)
        line(BodyA.position.x-20,BodyA.position.y,PointB.x-10,PointB.y);
      
        }

        
        
          }
          attach(body){
            this.body.bodyA = body;
    }
}