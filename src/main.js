import Canvas from './components/Canvas';
import Ball from './components/Ball';
import Game from './components/Game';
import Player from './components/Player';

Canvas.draw('#000');
Ball.draw('#0F0');

const p1 = new Player(10, 20);
p1.draw('#0F0');

console.log('Reloaded @ ' + new Date)