//the apple positioning will be improved soon.

window.onload = function() {

    //canvas stuff
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var totW = canvas.width;
    var totH = canvas.height;
    
    //keys on screen
    var btnLeft = document.querySelector('#left');
    var btnUp = document.querySelector('#up');
    var btnRight = document.querySelector('#right');
    var btnDown = document.querySelector('#down');
    
    //game stuff
    var editMode = false;  //set true to enter debug mode.
    var size = 20;
    
    //apple stuff
    var img = new Image();
    img.src = './img/apple.png';
    var applePattern = ctx.createPattern(img, "no-repeat");
    
    function clearCanvas() {
        let bgColor = 'rgb(27, 27, 27)';
        //clear canvas
        ctx.clearRect(0, 0, totW, totH);
        //restore keyboard bg color
        btnLeft.style.backgroundColor = bgColor;
        btnUp.style.backgroundColor = bgColor;
        btnRight.style.backgroundColor = bgColor;
        btnDown.style.backgroundColor = bgColor;
    }
    
    function drawGrid() {
        //set editMode = true to see canvas grid.
        let x = 0;
        let y = 0;
    
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgb(11, 11, 11)';
        
        //vertical lines
        ctx.beginPath();
        while (x < totW) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, totH);
            ctx.stroke();
    
            x += size;
        }
    
        //horizontal lines
        ctx.beginPath();
        while (y < totH) {
            ctx.moveTo(0, y);
            ctx.lineTo(totW, y);
            ctx.stroke();
            y += size;
        }
        
    }


    function mod(a, b) {
        //let the snake body pass through walls
        while ( b < a) {
            b += a;
        }
    
        return b % a;
    }
    
    //snake stuff
    class Snake {
        //DIRECTIONS
        // 2 = RIGHT || -2 = LEFT
        // 1 = DOWN  || -1 = UP
        constructor() {
    
            this.head = {
                x : 100,
                y : 100,
                dir : 2
            };
    
            this.body = [this.head];
            this.tail;
    
            this.grow = function() {
                let x, y, dir;
                //1. update the tail
                this.tail = this.body[this.body.length - 1];
                //1.2 get tail coordinates
                x = this.tail.x;
                y = this.tail.y;
                dir = this.tail.dir;
                //2. decide new coordinates for new body part based on
                //the tail direction
                switch(dir) {
                    //UP
                    case -1:
                        y += size;
                        break;
                    //RIGHT
                    case  2:
                        x -= size;
                        break;
                    //DOWN
                    case 1:
                        y -= size;
                        break;
                    //LEFT
                    case -2:
                        x += size;
                        break;
                }
                //3. push new body part to the snake body
                this.body.push({x, y, dir});
            };
    
            this.render = function() {
                let idx;
    
                for (idx = 0; idx < this.body.length; ++idx) {
                    let part = this.body[idx];
                    //put head blue if we are in editMode,
                    //else all body is green
                    if (editMode) {
                        ctx.fillStyle = idx === 0 ? 'blue' : 'green';
                    } else {
                        ctx.fillStyle = 'green';
                    }
    
                    //render each body part
                    ctx.fillRect(part.x, part.y, size, size);
                }
            };
    
            this.move = function() {
                let x, y, dir, newBody, head;
                let pressedColor = 'rgb(11, 151, 40)';
                //get head coordinates
                head = this.body[0];
                x = head.x;
                y = head.y;
                dir = head.dir;
                //change head coordinates
                switch(dir) {
                    //UP
                    case -1:
                        y = mod(totH, y - size);
                        btnUp.style.backgroundColor = pressedColor;
                        break;
                    //RIGHT
                    case  2:
                        x = mod(totW, x + size)
                        btnRight.style.backgroundColor = pressedColor;
                        break;
                    //DOWN
                    case 1:
                        y = mod(totH, y + size);
                        btnDown.style.backgroundColor = pressedColor;
                        break;
                    //LEFT
                    case -2:
                        x = mod(totW, x - size);
                        btnLeft.style.backgroundColor = pressedColor;
                        break;
                }
                //place new head to the new snake
                newBody = [{x, y, dir}];
                //create a copy of the snake body (-head)
                let idx;
                for (idx = 1; idx < this.body.length; ++idx) {
                    newBody.push({ ...this.body[ idx - 1] });
                }
                //update snake body with new (moved) body
                this.body = newBody;
    
                //update snake head
                this.head = this.body[0];
            };
        }
    }
    
    class Food {
        constructor(snakeBody) {
    
            this.P = function(n) {
                //returns n-th number in the
                //airthmetic progression
                //P(n) = a_1 + d * (n - 1)
                var a1 = 0;
                var d = size;
    
                if (n > 0) {
                    return a1 + d * (n-1);
                } else {
                    return 0;
                }
            }
    
            this.returnInteger = function(a = 0, b) {
                return Math.floor( Math.random() * b ) + a;
            }
    
            this.getRandomInt = function(a, b = totW) {
                //return random integer multiple of size
                //that is !== than each snake body part
                let max = Math.floor(totW / size);
                let nth;
                let random;
    
                //pick a random number between 0 and max (nth term in airthmetic progression)
                //repeat the process until you pick a number that is not inside snakeBody
    
                nth = this.returnInteger(0, max);
                random = this.P(nth);
                
                //loop through snake body to check if random !== than each body part
                while (random in snakeBody) {
                    nth = this.returnInteger(0, max);
                    random = this.P(nth);
                } 
                
                return random;
            }
    
            this.x = this.getRandomInt();
            this.y = this.getRandomInt();
            this.s = size;
    
            this.render = function() {
                //using apple pic
                ctx.drawImage(
                    img,
                    this.x, this.y,
                    this.s, this.s
                )
            }
        }
    }
    
    //keep this var before the game object and getcollision function
    var newFood = false;
    
    //put gameLoop in action!
    //setInterval(gameLoop, frameRate);
    
    //game state
    class Game {
        constructor() {
            this.alive = true;
            this.frameR = 120;
            this.points = 0;
            this.player = new Snake();
            this.food = new Food(this.player.body);
            this.start = function() {
                
                var p1 = this.player;
                var food = this.food;
    
                //start gameloop
                let id = setInterval(function() {
                    if (newFood) {
                        food = new Food(p1.body);
                        newFood = false;
                    }
                    gameLoop(p1, food);
                }, this.frameR);
    
            this.stop = id;
    
            }
        }
    }
    
    //start game
    game = new Game();
    game.start();

    
    function getCollision(player, food) {
        if (player.body.length > 1) {
            //check if there is collision with the owns snake body
            //loop through all snake body
            let i = 1;
            let head = player.head;
    
            for (i; i < player.body.length; ++i) {
                if (head.x === player.body[i].x && head.y === player.body[i].y) {
                    game.alive = false;
                }
            }
    
        }
        
        if (player.head.x === food.x && player.head.y === food.y) {
            //collision
            newFood = true;
            player.grow();
            game.points += 1;
        }
    }

    function displayStats() {
        //stuff to display when game over
        let centerX = totW/2 - 3*size;
        let centerY = totH/2;
        ctx.font = "30px Arial";
        ctx.fillText('game over', centerX, centerY)
        ctx.font = "15px Arial";
        ctx.fillStyle = 'rgb(31, 31, 31)';
        //restart option
        ctx.fillText('press <space bar> to restart', centerX - 30, centerY + 80);
        //display points and time
        ctx.fillText('points = ' + game.points, centerX + 30, centerY + 50);
    }
    
    function gameLoop(player, food, alive = game.alive) {
        //clear canvas
        clearCanvas();
    
        if (alive) {
    
        if (editMode) {
            drawGrid();
        }
    
        //render food and player
        player.render();
        food.render();
        //food.render();
    
        let movingNow = player.head.dir;
        //get keyboard input
        window.addEventListener('keydown', function(e) {
            //ternary operator with movingNow to avoid changing 
            //to opposite directions ( i.e from left to right)
            let code = e.keyCode;
            let dir;
    
            switch(code) {
                case 37:
                    //leftfood
                    dir = movingNow === 2 ? 2 : -2;
                    break;
                case 38:
                    //up
                    dir = movingNow === 1? 1 : -1;
                    break;
                case 39:
                    //right
                    dir = movingNow === -2 ? -2 : 2;
                    break;
                case 40:
                    //down
                    dir = movingNow === -1? -1 : 1;
                    break;
                default:
                    dir = player.head.dir;
                    break;
            }
    
            player.body[0].dir = dir;
    
        }, false);
    
        //or get buttons input
        window.addEventListener('click', function(e) {
            let clicked = e.target.id;
    
            switch(clicked) {
                case 'left':
                    //leftfood
                    dir = movingNow === 2 ? 2 : -2;
                    break;
                case 'up':
                    //up
                    dir = movingNow === 1? 1 : -1;
                    break;
                case 'right':
                    //right
                    dir = movingNow === -2 ? -2 : 2;
                    break;
                case 'down':
                    //down
                    dir = movingNow === -1? -1 : 1;
                    break;
                default:
                    dir = player.head.dir;
                    break;
            }
            
            player.body[0].dir = dir;
    
        }, false);
    
        player.move(player);
        //detect player and food collision
        getCollision(player, food);
        } else {
            //stop infinite loop
            clearInterval(game.stop);
            //display hidden restart button for mobile players
            document.querySelector("#restart").style.display = 'block';

            //game over
            displayStats();
            
            window.addEventListener('keydown', function(e) {
                if (e.keyCode === 32) {
                    //restart game (reloads page)
                    window.location.reload(true);
                }
            }, false);
    
            window.addEventListener('click', function(e) {
                if (e.target.id === 'restart') {
                    //restart game (reloads page)
                    window.location.reload(true);
                } 
            }, false);
    
        }
    }
}
