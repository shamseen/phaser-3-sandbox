/* ---- Setup ---- */
const config = {
    /* what it will use to render
       if WebGL fails, uses Canvas */
    type: Phaser.AUTO,

    // size of canvas element
    width: 800,
    height: 600,

    // game is a sequence of scenes
    // instances need crud functionality for render
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() { }

function create() { }

function update() { }