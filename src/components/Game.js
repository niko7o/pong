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
        
        console.log(this.state)
    }
}

export default Game;