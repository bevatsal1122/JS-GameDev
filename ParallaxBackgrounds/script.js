const canvas = document.getElementById('canvas0');
const showGameSpeed = document.getElementById('showGameSpeed');
const speedSlider = document.getElementById('speedSlider');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 15;

const backgroundLayer0 = new Image();
backgroundLayer0.src = "assets/layer-0.png";
const backgroundLayer1 = new Image();
backgroundLayer1.src = "assets/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "assets/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "assets/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "assets/layer-4.png";

class Layer {
   constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      this.x1 = this.width;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
   }

   async update() {
      gameSpeed = speedSlider.value;
      showGameSpeed.innerText = gameSpeed;
      this.speed = Math.floor(gameSpeed * this.speedModifier);
      if (this.x <= -2400) {
         this.x = this.x1 + this.width;
      }
      this.x -= this.speed;
      this.x1 -= this.speed;
      if (this.x <= 0) this.x1 = this.x + this.width;
      this.draw();
   }

   draw() {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x1, this.y, this.width, this.height);
   }
}
const layer0  = new Layer(backgroundLayer0, 0.2)
const layer1  = new Layer(backgroundLayer1, 0.35)
const layer2  = new Layer(backgroundLayer2, 0.65)
const layer3  = new Layer(backgroundLayer3, 0.85)
const layer4  = new Layer(backgroundLayer4, 1)

const gameLayers = [layer0, layer1, layer2, layer3, layer4]

function animate() {
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   gameLayers.forEach((oneLayer) => {
      oneLayer.update();
   })
   requestAnimationFrame(animate);  
}

animate()
