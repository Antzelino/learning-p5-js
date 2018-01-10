var pressed = false;
var mousev;
var offset;

function setup() { // RUNS ONCE AT THE BEGGINING!
    createCanvas(400, 400);
    mousev = createVector(mouseX, mouseY);
    offset = 3;
}


function draw() { // FOREVER LOOP!
    mousev.x = mouseX;
    mousev.y = mouseY;

    background(51);
    noStroke();
    if(pressed){
        ellipse(mousev.x, mousev.y, 40);
    }
    else{
        ellipse(mousev.x, mousev.y, 20);
    }

}

function mousePressed() { // EVENT!
    pressed = true;

}

function mouseReleased() { // EVENT!
    pressed = false;
}
