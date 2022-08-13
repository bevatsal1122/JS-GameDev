/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas0');
const context = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 650;
const numberOfEnemies = 280;
const enemies = [];
const enemyImage = new Image();
enemyImage.src = '../assets/enemy2.png';
let gameFrame = 0;

class Enemy {
   constructor(image) {
      this.image = image;
      this.speed = Math.random() * 4 + 1;
      this.spriteWidth = 218;
      this.spriteHeight = 177;
      this.width = this.spriteWidth / 2;
      this.height = this.spriteHeight / 2;
      this.x = Math.random() * (CANVAS_WIDTH - this.width);
      this.y = Math.random() * (CANVAS_HEIGHT - this.height);
      this.frame = 0;
      this.angle = 0;
      this.angleSpeed = Math.random() * 1.5 + 0.5;
   }
   update() {
      this.x = (CANVAS_WIDTH / 2) * Math.cos(this.angle * Math.PI / 200) + (CANVAS_WIDTH / 2 - this.width / 2);
      this.y = (CANVAS_HEIGHT / 2) * Math.sin(this.angle * Math.PI / 300) + (CANVAS_HEIGHT / 2 - this.height / 2);
      this.angle += this.angleSpeed;
      if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
      if (gameFrame % 2 == 0) {
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
