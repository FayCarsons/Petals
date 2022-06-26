
const canvasSize = 700
const gridSize = 4
const sqr = canvasSize/gridSize 
let n;  
let d;
let t = 0;
let row = true;
let roses = [];
let colors = [];
  


function setup() {
  createCanvas(canvasSize, canvasSize);
  angleMode(DEGREES);
  let coin = (random()>0.5 ? true : false) 
  
  for (let i = 0; i < gridSize*4; i++){
    if (random()>0.3){
      coin = ! coin
    }
    roses.push([2+int(random()*25),2+int(random()*25)])
    colors.push(coin ? [180,0,0] : [0,0,180])
  }
}

function draw() {
  background(244,240,232)
  translate(canvasSize/(gridSize*2),canvasSize/(gridSize*2))
  for (let y = 0; y < gridSize; y++ ){
    row = ! row
    for (let x = 0; x < gridSize; x++){
      t += 0.01
      n = roses[x*(gridSize)+y][0]
      d = roses[x*(gridSize)+y][1]//+(sin(t*0.05))*180

      noFill()
      //stroke(255,250,250);
      stroke(colors[x*gridSize+y],1)
      beginShape()
      strokeWeight(1)
      for (let i = 0; i <= 360; i++){
        let k = i
        let r = 200 * sin(n * k)
        let a = (row ? r * sin(k+t) : r * cos(k+t))
        let b = (row ? r * cos(k+t) : r * sin(k+t))
        vertex((a/gridSize)+(x*sqr),(b/gridSize)+(y*sqr))
      }
      endShape(CLOSE)
    
      stroke(0);
      beginShape();
      noFill()
      strokeWeight(1)
      for (let i = 0; i <=  360; i++){
        let k = i * d * PI/180;
        let r = 200 * sin(n * k)
        let a = (row ? r * sin(k+t) : r * cos(k+t))
        let b = (row ? r * cos(k+t) : r * sin(k+t))
        vertex((a/gridSize)+(x*sqr),(b/gridSize)+(y*sqr))
      }
      endShape(CLOSE);
    }
  }
} 

