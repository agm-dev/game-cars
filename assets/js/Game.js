'use strict'

class Game {

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.allowedKeys = ['a', 's', 'w', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        console.log(`Created new game with width: ${this.width}, and height: ${this.height}`);

        this.player1 = new Car(this.ctx, 50, 50);
        this.player2 = new Car(this.ctx, this.width-100, this.height-100);

        this.init = this.init.bind(this);
        this.loop = this.loop.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    init() {
        console.log(`Init game loop`);
        this.setKeyBindings();
        this.gameLoop = setInterval(this.loop, 1000 / 30);
        // TODO: set key listeners
    }

    loop() {
        // TODO: remove stuff
        this.update();
        this.render();
    }

    update() {
        this.player1.update();
        this.player2.update();
    }

    render() {
        this.ctx.fillStyle = '#222';
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.player1.render();
        this.player2.render();
    }

    setKeyBindings() {
        document.addEventListener('keydown', e => {
            if (this.allowedKeys.includes(e.key)) {
                e.preventDefault();
                if (e.key === 'w') {
                    this.player1.acelerate();
                }
                if (e.key === 'd') {
                    this.player1.turningRight = true;
                    console.log(`start turning right`);
                }
                if (e.key === 'a') {
                    this.player1.turningLeft = true;
                    console.log(`start turning left`);
                }
                if (e.key === 'ArrowUp') {
                    this.player2.acelerate();
                }
                if (e.key === 'ArrowRight') {
                    this.player2.turningRight = true;
                }
                if (e.key === 'ArrowLeft') {
                    this.player2.turningLeft = true;
                }
            }
        }, false);

        document.addEventListener('keyup', e => {
            if (this.allowedKeys.includes(e.key)) {
                e.preventDefault();
                if (e.key === 'w') {
                    this.player1.decelerate();
                }
                if (e.key === 'd') {
                    this.player1.turningRight = false;
                    console.log(`stop turning right`);
                }
                if (e.key === 'a') {
                    this.player1.turningLeft = false;
                    console.log(`stop turning left`);
                }
                if (e.key === 'ArrowUp') {
                    this.player2.decelerate();
                }
                if (e.key === 'ArrowRight') {
                    this.player2.turningRight = false;
                    console.log(`stop turning right`);
                }
                if (e.key === 'ArrowLeft') {
                    this.player2.turningLeft = false;
                    console.log(`stop turning left`);
                }
            }
        }, false);
    }

}