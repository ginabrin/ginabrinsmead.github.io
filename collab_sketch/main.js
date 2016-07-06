var config = {
    apiKey: "AIzaSyBIu7koAJVLN4D4-ccQbXJK5a6lb1vMW8M",
    authDomain: "collab-sketch-3e55b.firebaseapp.com",
    databaseURL: "https://collab-sketch-3e55b.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var points = [];

function setup() {
    var canvas = createCanvas(400, 400)
    background(255);
    fill(0);
    createCanvas(400, 400);
    background(255);
    fill(0);
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    });
    canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    background(255);

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}

function drawPoint() {
    pointsData.push({
        x: mouseX,
        y: mouseY
    });
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
    pointsData.on("child_removed", function() {
        points = [];
    });
}