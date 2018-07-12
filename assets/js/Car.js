'use strict'

class Car {

    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = 50;
        this.height = 50;
        this.speed = 0;
        this.direction = 'top';
        console.log(`Created new car`);

        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    update() {
        if (this.direction === 'top') {
            this.posY -= this.speed;
        }
        if (this.direction === 'down') {
            this.posY += this.speed;
        }
        if (this.direction === 'left') {
            this.posX -= this.speed;
        }
        if (this.direction === 'right') {
            this.posX += this.speed;
        }
    }

    render() {
        this.ctx.fillStyle = '#A34';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }


}