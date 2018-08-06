var Coin = require('./coin.js');
var Furry = require('./furry.js');

function Game() {
    this.board = document.getElementById('board').getElementsByTagName('div');
    this.furry = new Furry();
    this.coin = new Coin();

    this.score = 0;
    this.idSetInterval;

    this.index = function(x, y) {
        return x + (y * 10);
    }

    this.updateScore = function() {
        this.score++;
        document.getElementById('score')
            .getElementsByTagName('div')[0]
            .getElementsByTagName('strong')[0]
            .innerText = this.score;
    }

    this.hideVisibleCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
    }

    this.checkCoinCollision = function() {
        if(this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
            this.updateScore();
            this.hideVisibleCoin();
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.hideVisibleFurry = function() {
        var objects = document.querySelector('.furry');
        if(objects == undefined || objects == null || objects.length == 0) {
            return;
        }
        objects.classList.remove('furry');
    }

    this.showFurry = function() {
        this.hideVisibleFurry();
        var field = this.board[this.index(this.furry.x, this.furry.y)];
        if(field != undefined) {
            field.classList.add('furry')
        }
    }

    this.showCoin = function() {
        var field = this.board[this.index(this.coin.x, this.coin.y)];
        if(field != undefined) {
            field.classList.add('coin')
        }
    }

    this.moveFurry = function() {
        switch(this.furry.direction) {
            case "right":
                this.furry.x++;
                break;
            case "left":
                this.furry.x--;
                break;
            case "up":
                this.furry.y++;
                break;
            case "down":
                this.furry.y--;
                break;
        }
        this.checkCoinCollision();
        this.showFurry();
        this.gameOver();
    }

    this.turnFurry = function(event) {
        switch(event.keyCode){
            case 37:
                this.furry.direction = 'left';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 38:
                this.furry.direction = 'down';
                break;
            case 40:
                this.furry.direction = 'up';
                break;
            default:
                break;
        }
    }

    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval(function() {
            self.moveFurry();
        }, 250);
    }

    this.showOverallScore = function() {
        var element = document.getElementById('over');
        element.classList.remove('invisible');
        element.innerText = "GAME OVER! YOU SCORED "+this.score+" POINTS!";
    }

    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9
            || this.furry.y < 0 || this.furry.y > 9)
        {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            this.showOverallScore();
        }
    }
}

module.exports = Game;
