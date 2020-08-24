class Particle{
    constructor(x,y,r){
        var options = {

            isStatic: false
        }
        this.radius = r;
        this.body = Bodies.circle(x,y,this.radius,options);
        this.width = width;
        this.height = height;
        this.color=color(random(8,255), random(8,255), random(0,255));
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill(this.color);
    ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}