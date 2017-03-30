var Land = function(img, x, speed, ctx){
    this.img = img;
    this.x = x;
    this.speed = speed;
    this.ctx = ctx;
}

Land.prototype.draw = function(){
    this.ctx.drawImage(this.img, this.x, 488);
}

Land.prototype.setCount = function(count){
    Land.count = count;
}

Land.prototype.update = function(dur){
    this.x = this.x + this.speed * dur;
    if(this.x < -336){
        this.x = this.x + Land.count*336;
    }
}