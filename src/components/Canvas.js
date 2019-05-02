class Canvas {
    constructor() {
        this.canvas = document.getElementById('pong');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.vertical_middle = this.canvas.height / 2 - 15
    }

    draw(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default Canvas;