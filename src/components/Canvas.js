class Canvas {
    constructor() {
        this.canvas = document.getElementById('pong');
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    draw(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default new Canvas();