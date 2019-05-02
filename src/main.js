import Canvas from './components/Canvas';
import Ball from './components/Ball';
import Game from './components/Game';
import Player from './components/Player';

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


console.log('Reloaded @ ' + new Date)