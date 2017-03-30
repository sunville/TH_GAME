var Pipe = function(upImg, downImg, x, speed, ctx){
    this.x = x;
    this.upImg = upImg;
    this.downImg = downImg;
    this.speed = speed;
    this.ctx = ctx;
    this.height = Math.random() * 200 + 100;
}

Pipe.prototype.draw = function(){
    this.ctx.drawImage(
        this.upImg, this.x, this.height -320
    )
    this.ctx.drawImage(
        this.downImg, 0, 0, 52, 320,this.x, this.height + 150, 52, 488-this.height-150
    )
}

Pipe.prototype.setCount = function(count, gap){
    Pipe.count = count;
    Pipe.gap = gap;
}

Pipe.prototype.update = function(dur){
    this.x = this.x + this.speed * dur;
    if(this.x < -52){
        this.x = this.x + Pipe.count * Pipe.gap;
        this.height = Math.random() * 200 + 100;
    }
} 

Pipe.prototype.hitCheck = function(x,y){
    return (x > this.x - 46 && x < this.x + 40) && (!(y > this.height - 17 && y < this.height + 109));
}
