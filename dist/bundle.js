(function () {
    'use strict';

    class Canvas {
        constructor() {
            this.canvas = document.getElementById('pong');
            this.context = this.canvas.getContext('2d');
        }

        drawCanvas(color) {
            this.context.fillStyle = color;
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    var Canvas$1 = new Canvas();

    // import Greeter from "./components/Greeter";

    Canvas$1.drawCanvas('#000');

}());
