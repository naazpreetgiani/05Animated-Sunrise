//Sunrise Assignment

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Store images in variables
let cloud = document.getElementById("clothcloud-img");
let cloud2 = document.getElementById("clothcloud-img");

let cloud1x = 325;
let cloud1y = 250;
let cloud2x = 365;
let cloud2y = 225;

let arcx = 400;
let arcy = 450;
let arcSize = 20;
let arcRed = 255;
let arcGreen = 0;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // UPDATE
  // Animate cloud 1 and 2
  cloud1x--; // Move left
  cloud2x++; // Move right

  //Animate sun
  arcy--; //Move up
  arcSize += 0.15;

  if (arcRed !== arcGreen) {
    arcGreen++;
  }

  //Background & Shapes
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 800, 500); // Draw a filled rectangle

  ctx.fillStyle = "rgb(" + arcRed + ", " + arcGreen + ", 0 )";
  ctx.beginPath();
  ctx.arc(arcx, arcy, arcSize, arcSize, 2 * Math.PI); // Half Circle (0 to PI)  with center (250, 500) and radius 20
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(0, 450, 800, 600); //Draw a filled square

  // Draw Clouds
  ctx.drawImage(cloud, cloud1x, cloud1y); // Cloud 1
  ctx.drawImage(cloud2, cloud2x, cloud2y); // Cloud 2

  // LOOP
  requestAnimationFrame(animate);
}
