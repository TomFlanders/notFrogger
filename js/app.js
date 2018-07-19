"use strict";

let wins = 0;
let allEnemies = [];
let howManyEnemies = 3;

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 410;
};
Player.prototype.update = function() {
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyCode) {
    switch(keyCode) {
        case "up":
            if(this.y > 50){
                this.y -= 85;
            }
            if(player.y < 50) {
                setTimeout(function()
                {
                    wins++;
                    makeEnemies();
                }, 500);
            }
        
            break;
        case "down":
            if(this.y < 400){
                this.y += 85;
            }
            break;
        case "left":
            if(this.x > 50){
                this.x -= 100;
            }
            break;
            case "right":
            if(this.x < 400){
                this.x += 100;
            }
            break;
        default:

    }

};
const player = new Player();

// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = 230;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500){
        this.x = -100;
    }
    if( (this.x >= player.x - 70) && (this.x <= player.x + 70) ){
        if( (this.y >= player.y - 50) && (this.y <= player.y + 65) ){
                player.y = 410;
                player.x = 200;
    }
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let eRows = [230,145,65];
let speeds = [50,100,150];
let cols = [100,200,300,400,500];
let rRow = 0;
let rSpeed = 0;
let rCol = 0;
makeEnemies();

function makeEnemies() {
    allEnemies = [];
    howManyEnemies = (wins + 3);
    for(let i = 0;i < howManyEnemies; i++){
        allEnemies[i] = new Enemy();
        rSpeed = Math.floor(Math.random() * 3);
        allEnemies[i].speed = speeds[rSpeed];
        rRow = Math.floor(Math.random() * 3);
        allEnemies[i].y = eRows[rRow];
        rCol = Math.floor(Math.random() * 5);
        allEnemies[i].x = cols[rCol];
        player.y = 410;
        player.x = 200;
}
    
}
