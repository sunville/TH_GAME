var Bird = function(img, x, y, speed, a, ctx){
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.a = a;
    this.ctx = ctx;
    this.index = 0; // to make wings fan
}

Bird.prototype.draw = function() {
    //this.ctx.save();
    //this.ctx.translate(this.x,this.y);
    //this.ctx.rotate((Math.PI /6) * this.speed / 0.3 );
    
    this.ctx.drawImage(//image,image x coordination, image y coordination, image cut x length, image cut y length, canvas x coordinate, canvas y coordinate, actual image x length, actual image y length
        this.img, 
        this.index * 58, 0, 58, 58,
        this.x, this.y, 58, 58
    )
    //this.ctx.restore();
}

var durgather = 0;

Bird.prototype.update = function(dur) {
    durgather += dur;
    
    if(durgather > 100) {
        this.index++;
        if(this.index === 2){
            this.index = 0;
        }
        durgather -= 100;
    }
    //bird going down
    this.speed = this.speed + this.a * dur;
    this.y = this.y + this.speed * dur;
}