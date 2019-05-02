class Player {
    constructor(x = 0, y = 0, canvas) {
        this.ctx = canvas.ctx;
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 30;
        this.score = 0;
        this.vel = 3;
        this.moveListeners();
    }

    get left() {
        return this.x - this.width / 2;
    }

    get right() {
        return this.x + this.width / 2;
    }

    get top() {
        return this.y - this.height / 2;
    }

    get bottom() {
        return this.y + this.height / 2;
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            this.x, this.y, 
            this.width, this.height
        )
    }

    moveListeners() {
        document.addEventListener("keydown", event => {
            switch(event.key) {
                case 'ArrowDown':
                    this.y += 1;
                    break;
                case 'ArrowUp':
                    this.y -= 1;
                    break;
            }
        });
    }
}

export default Player;