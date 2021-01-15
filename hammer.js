class Hammer  {
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.15

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
    }
    display()
    {
        var hammerpos=this.body.position;
        
        push()
        translate(hammerpos.x,hammerpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("blue")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}