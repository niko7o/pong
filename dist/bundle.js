(function () {
    'use strict';

    class Canvas {
        constructor() {
            this.canvas = document.getElementById('pong');
            this.ctx = this.canvas.getContext('2d');
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.vertical_middle = this.canvas.height / 2 - 15;
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
            this.vel = 50;
            this.size = 8;
        }

        draw(color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(
                this.x - this.size, this.y - this.size, 
                this.size, this.size
            );
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
            );
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

    const canvas = new Canvas();
    const ball = new Ball(canvas);

    const players = [
        new Player(
            10,
            canvas.vertical_middle,
            canvas),
        new Player(
            canvas.width - 10,
            canvas.vertical_middle,
            canvas)
    ];

    function drawAllEntities() {
        canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.draw('#000');
        
        ball.draw('#0F0');
        
        players.forEach(player => {
            player.draw('#0F0');
            if(player.left < ball.right && player.right > ball.left &&
                player.top < ball.bottom && player.bottom > ball.top) {
                ball.vel = -ball.vel;
            }
        });
    }

    let lastTime;

    function callback(ms) {
        if (lastTime) { 
            update((ms - lastTime) / 1000); 
        }
        lastTime = ms;
        requestAnimationFrame(callback);
    }

    function update(dt) {
        ball.x += ball.vel * dt;
        ball.y += ball.vel * dt;
        
        // Impossible AI
        players[1].y = ball.y - (players[1].height / 2);

        drawAllEntities();
        checkForCollision();
    }

    function checkForCollision() {
        if (ball.left < 0 || ball.right > canvas.width) {
            ball.vel = -ball.vel;
        }

        if (ball.top < 0 || ball.bottom > canvas.height) {
            ball.vel = -ball.vel;
        }

    }

    callback();

    console.log('Reloaded @ ' + new Date);

}());
