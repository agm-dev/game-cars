'use strict'

const init = () => {
    console.log('Init function on DOMContentLoad event');
    const canvas = document.getElementById('game');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.Game = new Game(canvas);
    window.Game.init();
}


document.addEventListener('DOMContentLoaded', init, false);