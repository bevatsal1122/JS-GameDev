const canvas = document.getElementById('canvas0');
const animationDropdown = document.getElementById('selectState');
const context = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const dogImage = new Image();
dogImage.src = 'assets/shadow_dog.png';
let playerState = "idle";
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 3; // Controls Speed
let spriteAnimations = [];
const animationStates = [
   {
      name: "idle",
      frames: 7
   },
   {
      name: "jump",
      frames: 7
   },
   {
      name: "fall",
      frames: 7
   },
   {
      name: "run",
      frames: 9
   },
   {
      name: "dizzy",
      frames: 11
   },
   {
      name: "sit",
      frames: 5
   },
   {
      name: "roll",
      frames: 7
   },
   {
      name: "bite",
      frames: 7
   },
   {
      name: "knock-out",
      frames: 12
   },
   {
      name: "hit",
      frames: 4
   }
]

animationStates.forEach((state, index) => {
   let frames = {
      loc: []
   }

   for (let j = 0; j < state.frames; j++)
   {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({x: positionX, y: positionY})
   }
   spriteAnimations[state.name] = frames
})

animationDropdown.addEventListener('change', (e) => {
   playerState = e.target.value;
})

function animate() {
   context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   const maxCast = spriteAnimations[playerState].loc.length;
   let positionX = Math.floor(gameFrame / staggerFrames) % maxCast;
   let frameX = positionX * spriteWidth;
   let frameY = spriteAnimations[playerState].loc[positionX].y;
   context.drawImage(
      dogImage, 
      frameX,
      frameY,
      spriteWidth,
      spriteHeight,
      0, 0, spriteWidth, spriteHeight
      );

   gameFrame++;
   requestAnimationFrame(animate);
}

animate()

// ----> +ve X
// Down +ve Y
