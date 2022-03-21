//array of coordinates;
nums =[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
var fade;
var fadeAmount = 1
function setup() {
 
  createCanvas(window.innerWidth, window.innerHeight);  
  frameRate(1);
  fade = 0
}

function draw() {
  //random colour selector
  background(random(0,255));
  
  //outer loop for lines of circles
  for(var line = 50; line < 600; line+=50){
    //random colour selector
    let x =random(0, 255);
    if (x >=0){
      fill(x, random(0, 255), random(0, 255));
    }

    
    
    //loop that draws circles on x axis
    for (var i =0; i < windowWidth*10; i++){
      ellipse(i*5+random(1, 500), line+random(1, 500), 50, 50);
      //random colour selector
      let y =random(0, 255);
      if (y <=30){
      fill(y, random(0, 255), random(0, 255), fade);
        stroke(x,x,255)
    }

    }
  }
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-random(0, 255); 
 
  fade += fadeAmount; 
}