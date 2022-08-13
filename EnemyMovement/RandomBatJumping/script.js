/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas0');
const context = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 650;
const numberOfEnemies = 25;
const enemies = [];
const enemyImage = new Image();
enemyImage.src = '../assets/enemy3.png';
let gameFrame = 0;

class Enemy {
   constructor(image) {
      this.image = image;
      this.speed = Math.random() * 4 + 1;
      this.spriteWidth = 213;
      this.spriteHeight = 212;
      this.width = this.spriteWidth / 2.3;
      this.height = this.spriteHeight / 2.3;
      this.x = Math.random() * (CANVAS_WIDTH - this.width);
      this.y = Math.random() * (CANVAS_HEIGHT - this.height);
      this.newX = Math.random() * (CANVAS_WIDTH - this.width);
      this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
      this.frame = 0;
      this.frameSpeed = Math.floor(Math.random() * 4 + 1);
      this.jumpSpeed = Math.floor(Math.random() * 150 + 50);
   }
   update() {
      if (gameFrame % this.jumpSpeed == 0) {
         this.newX = Math.random() * (CANVAS_WIDTH - this.width);
         this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
      }
      let diffX = this.x - this.newX;
      let diffY = this.y - this.newY;
      this.x -= diffX / 50;
      this.y -= diffY / 50;
      if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
      if (gameFrame % this.frameSpeed == 0) {
         this.frame < 8 ? this.frame++ : this.frame = 0;
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
