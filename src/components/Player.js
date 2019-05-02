import Canvas from './Canvas';

class Player {
    constructor(x = 0, y = 0) {
        this.ctx = Canvas.context;
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 30;
        this.score = 0;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            this.x, this.y, 
            this.width, this.height
        )
    }
}

export default new Player();