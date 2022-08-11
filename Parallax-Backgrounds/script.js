const canvas = document.getElementById('canvas0');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 22;

const backgroundLayer0 = new Image();
backgroundLayer0.src = "assets/backgroundLayers/layer-0.png";
const backgroundLayer1 = new Image();
backgroundLayer1.src = "assets/backgroundLayers/layer-1.png";const backgroundLayer2 = new Image();
backgroundLayer2.src = "assets/backgroundLayers/layer-2.png";const backgroundLayer3 = new Image();
backgroundLayer3.src = "assets/backgroundLayers/layer-3.png";const backgroundLayer4 = new Image();
backgroundLayer4.src = "assets/backgroundLayers/layer-4.png";
let x = 0;
let y = 2400;

function animate() {
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   context.drawImage(backgroundLayer3, x, 0)
   context.drawImage(backgroundLayer3, y, 0)
   if (x < -2400) {
      x = y + 2400;
   }
   else {
      x-= gameSpeed;
      y-= gameSpeed;
   }
   if (x <= 0) y = x + 2400;
   requestAnimationFrame(animate);
}

animate()
