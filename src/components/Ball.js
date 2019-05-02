import Canvas from './Canvas';

class Ball {
    constructor() {
        this.ctx = Canvas.context;
        this.x = Canvas.width / 2;
        this.y = Canvas.height / 2;
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

export default new Ball();