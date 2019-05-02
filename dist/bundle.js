(function () {
    'use strict';

    class Canvas {
        constructor() {
            this.canvas = document.getElementById('pong');
            this.ctx = this.canvas.getContext('2d');
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        }

        draw(color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

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
            );
        }
    }

    class Player {
        constructor(x = 0, y = 0, canvas) {
            this.ctx = canvas.ctx;
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
            );
        }
    }

    // const game = new Game();
    const canvas = new Canvas();
    const ball = new Ball(canvas);

    const players = [
        new Player(10, canvas.height / 2 - 15, canvas),
        new Player(canvas.width - 10 - 8, canvas.height / 2 - 15, canvas)
    ];

    function drawAllEntities() {
        canvas.draw('#000');
        ball.draw('#0F0');
        players.forEach(player => player.draw('#0F0'));
    }

    drawAllEntities();


    console.log('Reloaded @ ' + new Date);

}());
