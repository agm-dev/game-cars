'use strict'

class Car {

    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.width = 50;
        this.height = 50;
        this.speed = 0;
        this.maxSpeed = 20;
        this.acelInterval = null;
        this.decelInterval = null;
        this.direction = 0;
        this.turnSpeed = 0.1;
        this.turningLeft = false;
        this.turningRight = false;
        console.log(`Created new car`);

        this.acelerate = this.acelerate.bind(this);
        this.decelerate = this.decelerate.bind(this);
        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }

    acelerate() { // TODO: check if this logic can be done into update method in other way, probably yes
        clearInterval(this.decelInterval);
        this.decelInterval = null;
        if (this.acelInterval === null) {
            this.acelInterval = setInterval(function () {
                const updatedSpeed = this.speed + 2; // TODO: place this in some kind of variable or constant
                this.speed = updatedSpeed > this.maxSpeed ? this.maxSpeed : updatedSpeed;
                console.log(`speed: ${this.speed}`);
                if (this.speed === this.maxSpeed) {
                    clearInterval(this.acelInterval);
                    this.acelInterval = null; // TODO: this couple of sentences could go into a method kind of stopAceleration()
                }
            }.bind(this), 1000 / 10); // TODO: interval in constant or variable
        }
    }

    decelerate() {
        clearInterval(this.acelInterval);
        this.acelInterval = null;
        this.decelInterval = setInterval(function () {
            const updatedSpeed = this.speed - 2;
            this.speed = updatedSpeed < 0 ? 0 : updatedSpeed;
            console.log(`speed: ${this.speed}`);
            if (this.speed === 0) {
                clearInterval(this.decelInterval);
                this.decelInterval = null;
            }
        }.bind(this), 1000 / 10);
    }

    update() {

        if (this.turningLeft === true) {
            this.direction -= this.turnSpeed;
        }
        if (this.turningRight === true) {
            this.direction += this.turnSpeed;
        }

        this.posX += Math.cos(this.direction) * this.speed;
        this.posY += Math.sin(this.direction) * this.speed;
    }

    render() {
        this.ctx.fillStyle = '#A34';
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.width / 2, 0, Math.PI * 2, false);
        this.ctx.fill();
    }


}