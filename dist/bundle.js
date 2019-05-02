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

    var Ball$1 = new Ball();

    class Game {
        constructor() {
            this.state = 'off'; // paused, running
            this.startListeners();
        }

        startListeners() {
            document.addEventListener("keydown", event => {
                switch(event.key) {
                    case 'p':   this.pause();
                                break;
                }
            });
        }

        pause() {
            this.state !== 'paused' 
            ? this.state = 'paused' 
            : this.state = 'running';
            
            console.log(this.state);
        }
    }

    new Game();

    class Player {
        constructor(x = 0, y = 0) {
            this.ctx = Canvas$1.context;
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

    var Player$1 = new Player();

    Canvas$1.draw('#000');
    Ball$1.draw('#0F0');

    const p1 = new Player$1(10, 20);
    p1.draw('#0F0');

    console.log('Reloaded @ ' + new Date);

}());
