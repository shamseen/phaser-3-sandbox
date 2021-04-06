/* ---- Setup ---- */
const config = {
    /* no renderer at all => serverside looks for DOM */
    type: Phaser.HEADLESS,

    // size of "cavas" element
    width: 800,
    height: 600,

    // game physics
    // Object factory: this.physics.add(foo)
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },

    // game is a sequence of scenes
    // instances need crud functionality for render
    scene: {
        preload: preload,
        create: create,
        update: update
    },

    // phaser won't call window.focus() before dom is ready
    autofocus: false
};

function preload() { }

function create() { }

function update() { }

// starting server after creating game instance
const game = new Phaser.Game(config);

try {
    console.log("game.js ===================");
    const w = window.gameLoaded();
    console.log(w)
}
catch (err) {
    console.log(err);
}