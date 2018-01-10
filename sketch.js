var pressed = false;

function setup() { // RUNS ONCE AT THE BEGGINING!
    createCanvas(400, 400);

}


function draw() { // FOREVER LOOP!
    background(51);
    noStroke();
    if(pressed){
        ellipse(mouseX,mouseY,25);
    }
    else{
        ellipse(mouseX,mouseY,5);
    }

}

function mousePressed() { // EVENT!
    pressed = true;

}

function mouseReleased() {
    pressed = false;
}
