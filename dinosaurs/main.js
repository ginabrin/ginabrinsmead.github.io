var gif

function setup() {
    createCanvas(20, 20);
    gif = loadGif("brad_pitt.gif")
}

function draw() {
    background(255, 255, 255);
    image(gif, 0, 0,10,10);
}