'use strict'

class Game {

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        console.log(`Created new game with width: ${this.width}, and height: ${this.height}`);

        this.init = this.init.bind(this);
        this.loop = this.loop.bind(this);
        this.render = this.render.bind(this);
    }

    init() {
        console.log(`Init game loop`);
        this.gameLoop = setInterval(this.loop, 1000 / 30);
        // TODO: set key listeners
    }

    loop() {
        // TODO: remove stuff
        // TODO: update game values
        this.render(this.ctx, this.width, this.height);
    }

    render(ctx, gameWidth, gameHeight) {
        ctx.fillStyle = '#222';
        ctx.fillRect(0, 0, gameWidth, gameHeight);
    }

}