class Ball extends Rectangle {
    constructor(ctx) {
        super(10, 10);
        this.vel = new Vector;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(ball.pos.x, ball.pos.y, 10, 10)
    }
}

export default new Ball();