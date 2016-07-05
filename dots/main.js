var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width / NUM_CIRCLES;
    circleRadius = circleDiameter / 2;
}

function draw() {
    rVal = 108
    gVal = 171
    bVal = 178

    var isShifted = false;

    var y = height;
    while (y >= 0) {

        var x;

        if (isShifted) {
            x = circleRadius;
        }
        else {
            x = 0;
        }

        while (x <= width) {
            fill(color(rVal, gVal, bVal))
            stroke(color(220, 220, 220))
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter + 10;

        }

        y = y - circleRadius - 20;
        isShifted = !isShifted;
        rVal = rVal + 3;
        gVal = gVal - 8;
        bVal = bVal - 5;

    }


}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}
