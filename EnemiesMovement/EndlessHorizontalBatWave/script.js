/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas0');
const context = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 650;
const numberOfEnemies = 30;
const enemies = [];
const enemyImage = new Image();
enemyImage.src = '../assets/enemy1.png';
let gameFrame = 0;

class Enemy {
   constructor(image) {
      this.image = image;
      this.speed = Math.random() * 4 + 1;
      this.spriteWidth = 266;
      this.spriteHeight = 188;
      this.width = this.spriteWidth / 2;
      this.height = this.spriteHeight / 2;
      this.x = Math.random() * (CANVAS_WIDTH - this.width);
      this.y = Math.random() * (CANVAS_HEIGHT - this.height);
      this.frame = 0;
      this.flapSpeed = Math.floor(Math.random() * 2 + 1);
      this.angle = Math.random() * 2;
      this.angleSpeed = Math.random() * 0.25;
      this.curveRange = Math.random() * 6 + 0.5;
   }
   update() {
      this.x += -this.speed;
      this.y += Math.sin(this.angle) * this.curveRange;
      this.angle += this.angleSpeed;
      if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
      if (gameFrame % this.flapSpeed == 0) {
         this.frame < 5 ? this.frame++ : this.frame = 0;
      }
   }
   draw() {
      context.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
   }
}

for (let i = 0; i < numberOfEnemies; i++) {
   enemies.push(new Enemy(enemyImage));
}

function animate() {
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   enemies.forEach((enemy) => {
      enemy.update();
      enemy.draw();
   })
   gameFrame++;
   requestAnimationFrame(animate);
}

animate();
