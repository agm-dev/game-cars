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
                console.log(`key press: ${e.key}`);
                e.preventDefault();
                if (e.key === 'w') {
                    this.player1.direction = 'top';
                    this.player1.speed = 10;
                }
                if (e.key === 's') {
                    this.player1.direction = 'down';
                    this.player1.speed = 10;
                }
                if (e.key === 'a') {
                    this.player1.direction = 'left';
                    this.player1.speed = 10;
                }
                if (e.key === 'd') {
                    this.player1.direction = 'right';
                    this.player1.speed = 10;
                }
                if (e.key === 'ArrowUp') {
                    this.player2.direction = 'top';
                    this.player2.speed = 10;
                }
                if (e.key === 'ArrowDown') {
                    this.player2.direction = 'down';
                    this.player2.speed = 10;
                }
                if (e.key === 'ArrowLeft') {
                    this.player2.direction = 'left';
                    this.player2.speed = 10;
                }
                if (e.key === 'ArrowRight') {
                    this.player2.direction = 'right';
                    this.player2.speed = 10;
                }
            }
        }, false);

        document.addEventListener('keyup', e => {
            if (this.allowedKeys.includes(e.key)) {
                console.log(`key up: ${e.key}`);
                e.preventDefault();
                if ('awsd'.split('').includes(e.key)) {
                    this.player1.speed = 0;
                }
                if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                    this.player2.speed = 0;
                }
            }
        }, false);
    }

}