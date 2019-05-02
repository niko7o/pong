(function () {
    'use strict';

    class Canvas {
        constructor() {
            this.canvas = document.getElementById('pong');
            this.context = this.canvas.getContext('2d');
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        }

        draw(color) {
            this.context.fillStyle = color;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    var Canvas$1 = new Canvas();

    class Ball {
        constructor() {
            this.ctx = Canvas$1.context;
            this.x = Canvas$1.width / 2;
            this.y = Canvas$1.height / 2;
            this.size = 20;
        }

        draw(color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(
                this.x - this.size, this.y - this.size, 
                this.size, this.size
            );
        }
    }

    var Ball$1 = new Ball();

    Canvas$1.draw('#000');
    Ball$1.draw('#0F0');

}());
