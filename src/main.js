import Canvas from './components/Canvas';
import Ball from './components/Ball';
import Player from './components/Player';

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
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
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
        update((ms - lastTime) / 1000) 
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

console.log('Reloaded @ ' + new Date)