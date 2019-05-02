class Ball {
    constructor(canvas) {
        this.ctx = canvas.ctx;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.size = 8;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            this.x - this.size, this.y - this.size, 
            this.size, this.size
        )
    }
}

export default Ball;