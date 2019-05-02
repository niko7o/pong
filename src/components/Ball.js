class Ball {
    constructor(canvas) {
        this.ctx = canvas.ctx;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.vel = 50;
        this.size = 8;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            this.x - this.size, this.y - this.size, 
            this.size, this.size
        )
    }

    get left() {
        return this.x - this.size / 2;
    }

    get right() {
        return this.x + this.size / 2;
    }

    get top() {
        return this.y - this.size / 2;
    }

    get bottom() {
        return this.y + this.size / 2;
    }
}

export default Ball;