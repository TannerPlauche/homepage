/**
 * Based on Circle Collision with Swapping Velocities by Ira Greenberg. 
 * (which is based on Keith Peter's Solution in Foundation Actionscript
 *  Animation: Making Things Move!)
 * https://processing.org/examples/circlecollision.html
 * 
 * Ported to p5js by Jared Donovan. 2019.
 */

let balls = [];
let canvas = null;

function setup() {
    createCanvas(640, 360, 'WEBGL');

    balls.push(new Ball(200, 300, 30, 'a'));
    balls.push(new Ball(100, 400, 50, 'b'));
    balls.push(new Ball(300, 400, 60, 'c'));
    balls.push(new Ball(700, 400, 80, 'd'));
    setupListener();
}

function draw() {
    background(51);

    for (let b of balls) {
        // b.getPosition();
        b.update();
        b.display();
        b.checkBoundaryCollision();
    }

    balls[0].checkCollision(balls[1]);
    balls[0].checkCollision(balls[2]);
    balls[0].checkCollision(balls[3]);
    balls[1].checkCollision(balls[2]);
    balls[1].checkCollision(balls[3]);
    balls[2].checkCollision(balls[3]);

}

function setupListener(balls) {
    canvas = document.getElementById('defaultCanvas0');
    canvas.addEventListener('click', checkBallClick);
}

function checkBallClick(event) {
    console.clear();
    let { x, y } = getCursorPosition(canvas, event);
    // console.log(event.screenX, event.screenY)

    // console.log(ball.position.x, ball.position.y);
    findBallByCoords(x, y);
}

function findBallByCoords(clickX, clickY) {
    for (ball of balls) {
        if (ball.isClicked(clickX, clickY)) {
            // console.log(ball.isClicked(clickX, clickY))
            console.log(ball.subject);
        }
    }

}

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
    return { x, y };
}