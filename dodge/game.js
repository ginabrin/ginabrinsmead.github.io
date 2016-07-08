var enemy;
var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var enemyImage2ndStage;
var backgroundImage;
var score = 0;
var reset;

function preload() {
  playerImage = loadImage("nest.png");
  enemyImage = loadImage("egg.png");
  enemyImage2ndStage = loadImage("cracked egg.png")
  backgroundImage = loadImage("barn.jpg");
}

function setup() {
  createCanvas(456, 256);
  isGameOver = false;
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);

  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;

}

function draw() {
  if (isGameOver) {
    gameOver();
    
  }else {
    

    background(backgroundImage);

    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 5;
    }

    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 5;
    }

    if (enemy.position.y < height) {
      enemy.position.y = enemy.position.y + 3.5;
      enemy.rotationSpeed = 3.0;
    }
    if (enemy.position.y > height) {
      enemy.addImage(enemyImage2ndStage);
      enemy.position.y = 0;
      isGameOver = true;
      enemy.position.x = random(5, width - 5);
      setTimeout(function() {
        enemy.addImage(enemyImage)
        isGameOver = false;
        score = 0
      }, 1000);
    }

    if (enemy.overlap(player)) {
      score += 1;
      enemy.position.y = 0
      enemy.position.x = random(5, width - 5)
    }

    // if (score < 10)
    textSize(72)
    textAlign(CENTER, CENTER)
    text(score, width / 2, height / 2)

    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
}

// function mouseClicked() {
//   isGameOver = false;
//   player.position.x = width / 2;
//   player.position.y = height - (playerImage.height / 2);
//   enemy.position.x = width / 2;
//   enemy.position.y = 0;
//   console.log("mouseClicked");
// }